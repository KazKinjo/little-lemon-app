import { SectionList, StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Separator = () => <View style={styles.separator} />
const Header = () => <Text style={styles.headerText}>View Menu</Text>
const Footer = () => <Text style={styles.footerText}>All rights reserved by Little Lemon, 2024</Text>

function Item({ name, price }) {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{price}</Text>
    </View>
  )
}

export default function MenuItems() {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  itemText: {
    fontSize: 20,
    color: "#EDEFEE",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  headerText: {
    fontSize: 40,
    color: "#EDEFEE",
    textAlign: "center",
    padding: 40,
  },
  footerText: {
    fontSize: 18,
    color: "#EDEFEE",
    textAlign: "center",
    padding: 10,
  },
  sectionContainer: {
    backgroundColor: "#F4CE14",
  },
  sectionTitle: {
    fontSize: 26,
    color: "#333333",
    flexWrap: "wrap",
    textAlign: "center"
  }
});