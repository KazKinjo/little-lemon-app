import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme
} from "react-native";
import { validateEmail } from "../utils/index";

export default SubscriptionScreen = () => {
  const [email, setEmail] = useState("");
  const isEmailValid = validateEmail(email);
  const colorScheme = useColorScheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#495E57" }
          : { backgroundColor: "#333333" }
      ]}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Image
          source={require("../img/little-lemon-logo-main.png")}
          style={styles.logo} />
        <Text style={[
          styles.headerText,
          colorScheme === "light"
            ? { backgroundColor: "#495E57" }
            : { backgroundColor: "#333333" }
        ]}>
          Subscribe to our newsletter for
          our latest delicious recipes!
        </Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={setEmail}
          placeholder="Please enter your email address"
          keyboardType="email-address"
          clearButtonMode="while-editing"
        />
        <Pressable
          style={[
            styles.button,
            !isEmailValid && styles.disabled
          ]}
          onPress={() => {
            if (isEmailValid) {
              Alert.alert("Thanks for subscribing, stay tuned!");
            }
          }}
        >
          <Text style={styles.buttonText}>
            Subscribe
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView >
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 200,
    alignSelf: "center",
    resizeMode: "contain",
  },
  headerText: {
    color: "#EDEFEE",
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 30,
    textAlign: "center",
  },
  inputBox: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 1,
    borderRadius: 16,
  },
  button: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 1,
    borderRadius: 16,
  },
  disabled: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: "#A9A9A9",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    borderRadius: 16,
    opacity: 0.5,
  },
  buttonText: {
    color: "#333333",
    fontSize: 18,
    textAlign: "center"
  }
});