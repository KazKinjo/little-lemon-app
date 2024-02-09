import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';

import WelcomeScreen from '../components/WelcomeScreen';
import LoginScreen from '../components/LoginScreen';
import SubscribeScreen from '../components/SubscribeScreen';
import MenuItems from '../components/MenuItems';

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
    <Tab.Navigator
      style={styles.container}
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size = 24, color = "black" }) => {
          if (route.name === "Home") {
            return <Entypo name="home" size={size} color={color} />
          } else if (route.name === "Menu") {
            return <MaterialIcons name="restaurant-menu" size={size} color={color} />
          } else if (route.name === "Login") {
            return <AntDesign name="login" size={size} color={color} />
          } else if (route.name === "Subscription") {
            return <MaterialIcons name="subscriptions" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: "#333333",
      })}
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{ headerTitle: (props) => <HomeLogo {...props} /> }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuItems}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
      />
      <Tab.Screen
        name="Subscription"
        component={SubscribeScreen}
      />
    </Tab.Navigator>

    // <Drawer.Navigator>
    //   <Drawer.Screen name='Home' component={WelcomeScreen} />
    //   <Drawer.Screen name='Menu' component={MenuItems} />
    //   <Drawer.Screen name='Login' component={LoginScreen} />
    //   <Drawer.Screen name='Subscribe' component={SubscribeScreen} />
    // </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
