import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';

import WelcomeScreen from '../components/WelcomeScreen';
import LoginScreen from '../components/LoginScreen';
import SubscriptionScreen from '../components/SubscriptionScreen';
import MenuItems from '../components/MenuItems';
import PreferenceScreen from '../components/PreferenceScreen';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function RootNavigator() {
  const HomeLogo = () => (
    <Image
      style={styles.img}
      source={require("../img/LIttle-Lemon-Logo.png")}
    />
  );

  return (
    <Tab.Navigator
      initialRouteName="Login"
      style={styles.container}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size = 24, color = "#333333" }) => {
          switch (route.name) {
            case "Home":
              return <Entypo name="home" size={size} color={color} />;
            case "Menu":
              return <MaterialIcons name="restaurant-menu" size={size} color={color} />;
            case "Login":
              return <AntDesign name="login" size={size} color={color} />;
            case "Subscription":
              return <MaterialIcons name="subscriptions" size={size} color={color} />;
            case "Preferences":
              return <AntDesign name="setting" size={size} color={color} />;
          }
          // if (route.name === "Home") {
          //   return <Entypo name="home" size={size} color={color} />
          // } else if (route.name === "Menu") {
          //   return <MaterialIcons name="restaurant-menu" size={size} color={color} />
          // } else if (route.name === "Login") {
          //   return <AntDesign name="login" size={size} color={color} />
          // } else if (route.name === "Subscription") {
          //   return <MaterialIcons name="subscriptions" size={size} color={color} />
          // } else if (route.name === "Preferences") {
          //   return <AntDesign name="setting" size={size} color={color} />
          // }
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
        component={SubscriptionScreen}
      />
      <Tab.Screen
        name="Preferences"
        component={PreferenceScreen}
      />
    </Tab.Navigator>

    // <Drawer.Navigator>
    //   <Drawer.Screen name='Home' component={WelcomeScreen} />
    //   <Drawer.Screen name='Menu' component={MenuItems} />
    //   <Drawer.Screen name='Login' component={LoginScreen} />
    //   <Drawer.Screen name='Subscribe' component={SubscriptionScreen} />
    // </Drawer.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#495E57',
    paddingVertical: 16,
  },
  img: {
    height: 30,
    width: 200,
    alignItems: "center",
    resizeMode: 'contain',
  },
});
