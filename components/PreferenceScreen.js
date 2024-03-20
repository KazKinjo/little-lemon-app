import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUpdate from '../utils/useUpdate';

export default function PreferenceScreen() {
  const [preferences, setPreferences] = useState({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const keys = await AsyncStorage.multiGet(Object.keys(preferences));
        const initialState = keys.reduce((accumulator, currentValue) => {
          accumulator[currentValue[0]] = JSON.parse(currentValue[1]);
          return accumulator;
        }, {});

        setPreferences(initialState);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
      }
    })(); // Insert IIFE(Immediately Invoked Function Expression)
  }, []);

  useUpdate(() => {
    (async () => {
      const keyValues = Object
        .entries(preferences)
        .map((preference) => {
          return [preference[0], String(preference[1])];
        });
      try {
        await AsyncStorage.multiSet(keyValues);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
      }
    })();
  }, [preferences]);

  const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Account Preferences
      </Text>
      <View style={styles.switchContainers}>
        <Text style={styles.text}>
          Push notifications
        </Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.switchContainers}>
        <Text style={styles.text}>
          Marketing emails
        </Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.switchContainers}>
        <Text style={styles.text}>
          Latest news
        </Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  switchContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  text: {
    fontSize: 18,
  },
  headerText: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
