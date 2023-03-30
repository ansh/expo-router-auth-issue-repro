import { StyleSheet, Button } from "react-native";
import { Text, View } from "../../components/Themed";
import { useAuth } from "../../config/auth";

const PhoneInputScreen = () => {
  const { signIn } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Sign In"
        onPress={() => {
          signIn();
        }}
      />
    </View>
  );
};

export default PhoneInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  headingText: {
    color: "black",
  },
  headingSubtext: {
    color: "black",
    marginTop: 8,
  },
  topHalf: {},
  phoneInputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 32,
  },
  phoneInput: {
    fontSize: 20,
    fontWeight: "600",
    height: 54,
    width: "80%",
    padding: 10,
  },
  handleStyle: {
    backgroundColor: "black",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  handleIndicatorStyle: {
    backgroundColor: "white",
  },
  countryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  otpInput: {
    height: 54,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 16,
    marginTop: 16,
  },
});
