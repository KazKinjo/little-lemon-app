import {
  View,
  StyleSheet,
  Text, Image,
  ScrollView,
  useColorScheme,
  Pressable
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light" ? { backgroundColor: "#495E57" } : { backgroundColor: "#333333" }
      ]}
    >
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require("../img/little-lemon-logo-main.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little lemon Logo"}
        />
        <Text
          style={[
            styles.headerText,
            colorScheme === "light" ? { color: "#EDEFEE" } : { color: "#FFFFFF" }
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
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscription")}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
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