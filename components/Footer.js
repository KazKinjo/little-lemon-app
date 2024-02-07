import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        All rights reserved by Little Lemon, 2024
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
  },
  text: {
    fontSize: 18,
    color: "#333333",
    textAlign: "center",
  }
});