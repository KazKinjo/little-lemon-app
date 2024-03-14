import {
  Text,
  View,
  StyleSheet,
  Image,
  useColorScheme,
} from "react-native";

export default WelcomeScreen = () => {
  const colorScheme = useColorScheme();

  return (
    <View
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
          source={require("../img/little-lemon-logo-main.png")}
          accessible={true}
          accessibilityLabel="Little lemon Logo"
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
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 30,
  },
  headerText: {
    color: "#EDEFEE",
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    color: "#EDEFEE",
    fontSize: 18,
    marginVertical: 50,
    marginHorizontal: 30,
    textAlign: "center",
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: "cover"
  },
});