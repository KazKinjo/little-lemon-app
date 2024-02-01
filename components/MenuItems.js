import { ScrollView, StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
  return (
    <View style={styles.container}>
      <ScrollView indicatorStyle="white" horizontal={false}>
        <Text style={styles.heading}>
          View Menu
        </Text>
        <Text style={styles.menu}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
  },
  heading: {
    fontSize: 40,
    color: '#EDEFEE',
    textAlign: 'center',
    padding: 40,
  },
  menu: {
    fontSize: 24,
    color: '#EDEFEE',
    textAlign: 'center',
    padding: 20,
  },
});


export default MenuItems;