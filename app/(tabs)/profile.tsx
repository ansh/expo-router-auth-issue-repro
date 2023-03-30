import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { useAuth } from "../../config/auth";

export default function ProfileScreen() {
  const { signOut, user } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
