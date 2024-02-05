import { useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, Pressable, useColorScheme } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        keyboardDismissMode = "on-drag",
        colorScheme === "light"
          ? { backgroundColor: "#495E57" }
          : { backgroundColor: "#333333" }
      ]}
    >
      <Text
        style={[
          styles.headerText,
          colorScheme === "light"
            ? { color: "#EDEFEE" }
            : { color: "#FFFFFF" }
        ]}
      >
        Welcome to Little Lemon</Text>
      <Text
        style={[
          styles.regularText,
          colorScheme === "light"
            ? { color: "#EDEFEE" }
            : { color: "#FFFFFF" }
        ]}
      >
        Login to continue</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder={"email"}
        onChangeText={onChangeEmail}
        keyboardType={"email-address"}
        clearButtonMode={"while-editing"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"password"}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        clearButtonMode={"while-editing"}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
    padding: 40,
  },
  regularText: {
    fontSize: 24,
    color: "#EDEFEE",
    textAlign: "center",
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    padding: 10,
    fontSize: 16,
  },
  button: {
    padding: 10,
    margin: 100,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 25,
    color: "#333333",
    textAlign: "center"
  }
});


export default LoginScreen;