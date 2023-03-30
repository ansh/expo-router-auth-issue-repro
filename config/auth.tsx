import { useRouter, useSegments } from "expo-router";
import { useContext, useState, useEffect, createContext } from "react";
import { getUserData } from "../hooks/apiMock";

interface User {
  uid: string;
  phone: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  signOut: () => void;
  signIn: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signOut: () => {},
  signIn: () => {},
  isLoading: true,
});

// This hook can be used to access the user info.
export function useAuth() {
  return useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: User) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/signin");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useProtectedRoute(user!);

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      const tempUser: User = await getUserData();
      setUser(tempUser);

      // FINALLY, setting loading to complete
      setIsLoading(false);
    }

    fetchUser();
  }, []);

  const signIn = async () => {
    const tempUser: User = await getUserData();
    setUser(tempUser);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signOut: signOut,
        signIn: signIn,
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };

// Explanation of this file:
// First, <Provider> is used to wrap the entire app in the _layout.tsx file.
// This means, the useEffect will be the first thing to fire, and will either set the user to null or the user object.
// If the user does not exist, then the user will be redirected to the sign-in page (/signin route)
// If the user does exist, then the user will be redirected to the home page (/ route)
