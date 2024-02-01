import { StyleSheet, Text, View } from "react-native";


export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Welcome to Little Lemon
      </Text>
      <Text style={styles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
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
  }
})