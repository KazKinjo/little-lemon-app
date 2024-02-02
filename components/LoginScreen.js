import { useState } from "react";
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform } from 'react-native';

const LoginScreen = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue </Text>
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
      </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    padding: 10,
    fontSize: 16,
  }
});


export default LoginScreen;