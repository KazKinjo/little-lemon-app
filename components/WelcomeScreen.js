import { View, StyleSheet, Text, Image, ScrollView, useColorScheme, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#495E57" }
          : { backgroundColor: "#333333" }
      ]}
    >
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require("../img/Image-1.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little lemon Logo"}
        />
        <Text
          style={[
            styles.headerText,
            colorScheme === "light"
              ? { color: "#EDEFEE" }
              : { color: "#FFFFFF" }
          ]}
        >
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.text,
          colorScheme === "light"
            ? { color: "#EDEFEE" }
            : { color: "#FFFFFF" }
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>
          Signup
        </Text>
      </Pressable>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#EDEFEE",
    textAlign: "center",
    padding: 20,
    marginVertical: 8,
  },
  logo: {
    height: 100,
    width: 100,
  },
  button: {
    padding: 10,
    margin: 40,
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


export default WelcomeScreen;