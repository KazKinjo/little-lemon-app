import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <MenuItems />
      </View>
      <View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
