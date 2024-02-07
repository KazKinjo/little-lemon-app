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
  TextInput
} from "react-native"

import { validateEmail } from "../utils";

export default function SubscribeScreen() {
  const [email, setEmail] = useState("");
  const isEmailValid = validateEmail(email);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Image
          style={styles.logo}
          source={require("../img/little-lemon-logo-main.png")}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>
          Subscribe to our newsletter for
          our latest delicious recipes!
        </Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={setEmail}
          placeholder="Please enter your email address"
          keyboardType="email-address"
          clearButtonMode="while-edditing"
        />
        <Pressable
          style={[styles.button, styles.disabled]}
          onPress={() => {
            Alert.alert("Thanks for subscribing, stay tuned!");
          }}
          disabled={!isEmailValid}
        >
          <Text style={styles.buttonText}>
            Subscribe
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginVertical: 50,
  },
  headerText: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#333333",
    backgroundColor: "#FFFFFF",
  },
  button: {
    padding: 10,
    marginHorizontal: 50,
    marginVertical: 20,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 1,
    borderRadius: 16,
  },
  disabled: {
    borderColor: "#A9A9A9",
    backgroundColor: "#A9A9A9",
    opacity: 0.5,
  },
  buttonText: {
    color: "#333333",
    fontSize: 18,
    textAlign: "center"
  }
});