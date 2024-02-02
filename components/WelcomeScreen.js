import { View, StyleSheet, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Welcome to Little Lemon
      </Text>
      <Text style={styles.text}>
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
});


export default WelcomeScreen;