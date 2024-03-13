import { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import { validateEmail } from "../utils/index";
import { validatePassword } from "../utils/index";

export default LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
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
        <Text
          style={[
            styles.headerText,
            colorScheme === "light"
              ? { color: "#EDEFEE" }
              : { color: "#FFFFFF" }
          ]}
        >
          Login
        </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={onChangeEmail}
          value={email}
          clearButtonMode="while-editing"
          placeholder="Email address"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          clearButtonMode="while-editing"
          placeholder="Password"
          keyboardType="default"
        />
        <Pressable
          style={[
            styles.button,
            (!isEmailValid || !isPasswordValid) && styles.disabled
          ]}
          onPress={() => {
            if (isEmailValid && isPasswordValid) {
              navigation.navigate("Home")
            }
          }}
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: "#EDEFEE",
    fontSize: 30,
    margin: 30,
    textAlign: "center",
  },
  inputBox: {
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 1,
    borderRadius: 16,
  },
  button: {
    padding: 10,
    marginVertical: 20,
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