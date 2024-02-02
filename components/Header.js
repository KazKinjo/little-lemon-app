import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Little Lemon
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "#F4CE14",
  },
  text: {
    padding: 50,
    fontSize: 30,
    color: "#333333",
    textAlign: "center",
  }
});


export default Header;