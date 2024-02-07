import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

export default function SubscribeScreen({ navigation }) {
  const [email, onChangeEmail] = useState("");
  // const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../img/little-lemon-logo-main.png")}
      />
      <Text style={styles.heading}>
        Subscribe to our newsletter for
        our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        clearButtonMode={"while-edditing"}
        placeholder="Please enter your email address"
        keyboardType="email-address"
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
          onChangeEmail("");
        }}
      >
        <Text style={styles.buttonText}>
          Subscribe
        </Text>
      </Pressable>
    </View>
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
  heading: {
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
    backgroundColor: "#FFFFFF",
  },
  button: {
    marginVertical: 30,
    marginHorizontal: 50,
    padding: 10,
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