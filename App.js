import { Image, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      source={require("./img/LIttle-Lemon-Logo.png")}
      resizeMode='contain'
      style={{
        height: 40,
        width: 300,
        alignItems: "center",
      }}
    />
  )
};

export default function App() {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: { backgroundColor: "#EDEFEE" },
            headerTintColor: "#333333",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ title: "Home", headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
