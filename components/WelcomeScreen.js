import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput } from "react-native";

const WelcomeScreen = () => {
  const [firstname, onChangeFirstname] = useState('');
  const [lastname, onChangeLastname] = useState('');
  const [message, onChangeMessage] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>
          Welcome to Little Lemon
        </Text>
        <Text style={styles.text}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear more about your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstname}
          placeholder={"Firstname"}
          onChangeText={onChangeFirstname}
        />
        <TextInput
          style={styles.input}
          value={lastname}
          placeholder={"Lastname"}
          onChangeText={onChangeLastname}
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          placeholder={"Please leave feedback"}
          onChangeText={onChangeMessage}
          multiline={true}
          maxLength={250}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
    padding: 40,
  },
  text: {
    fontSize: 24,
    color: '#EDEFEE',
    textAlign: 'center',
    padding: 20,
    marginVertical: 8,
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
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    padding: 10,
    fontSize: 16,
  }
});


export default WelcomeScreen;