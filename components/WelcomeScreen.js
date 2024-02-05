import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

const WelcomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require("../img/Image-1.png")}
          resizeMethod={"cover"}
          accessible={true}
          accessibilityLabel={"Little lemon Logo"}
        />
        <Text style={styles.headerText}>
          Little Lemon
        </Text>
      </View>
      <Text style={styles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
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
    padding: 40,
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
  }
});


export default WelcomeScreen;