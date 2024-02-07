import { useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, Pressable, useColorScheme } from 'react-native';

export default function LoginScreen({ navigation }) {
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
        Welcome to Little Lemon
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        placeholder={"email"}
        onChangeText={onChangeEmail}
        keyboardType={"email-address"}
        clearButtonMode={"while-editing"}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        placeholder={"password"}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        clearButtonMode={"while-editing"}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: "#EDEFEE",
    fontSize: 30,
    padding: 40,
    textAlign: "center",
  },
  regularText: {
    color: "#EDEFEE",
    fontSize: 24,
    padding: 20,
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
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
  buttonText: {
    color: "#333333",
    fontSize: 18,
    textAlign: "center"
  }
});