import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import WelcomeScreen from '../components/WelcomeScreen';
import LoginScreen from '../components/LoginScreen';
import SubscribeScreen from '../components/SubscribeScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeLogo() {
  return (
    <Image
      source={require("../img/LIttle-Lemon-Logo.png")}
      resizeMode='contain'
      style={{
        height: 30,
        width: 200,
        alignItems: "center",
      }}
    />
  )
};

export default function RootNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={WelcomeScreen} />
      <Drawer.Screen name='Login' component={LoginScreen} />
      <Drawer.Screen name='Subscribe' component={SubscribeScreen} />
    </Drawer.Navigator>
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <Tab.Navigator
    //       initialRouteName="Home"
    //       screenOptions={({ route }) => ({
    //         tabBarIcon: ({ color, size }) => {
    //           let iconName;
    //           if (route.name === "Home") {
    //             iconName = "home";
    //           } else if (route.name === "Login") {
    //             iconName = "enter";
    //           }
    //           return <Ionicons name={iconName} color={color} size={size} />
    //         },
    //         tabBarActiveTintColor: "#333333",
    //       })}
    //     >
    //       <Tab.Screen
    //         name="Home"
    //         component={WelcomeScreen}
    //         options={{ headerTitle: (props) => <HomeLogo {...props} /> }}
    //       />
    //       <Tab.Screen
    //         name="Login"
    //         component={LoginScreen}
    //       />
    //     </Tab.Navigator>
    //   </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
