import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from "react-native";

// const menuItemsToDisplay = [
//   {
//     title: 'Appetizers',
//     data: [
//       { name: 'Hummus', price: '$5.00' },
//       { name: 'Moutabal', price: '$5.00' },
//       { name: 'Falafel', price: '$7.50' },
//       { name: 'Marinated Olives', price: '$5.00' },
//       { name: 'Kofta', price: '$5.00' },
//       { name: 'Eggplant Salad', price: '$8.50' },
//     ],
//   },
//   {
//     title: 'Main Dishes',
//     data: [
//       { name: 'Lentil Burger', price: '$10.00' },
//       { name: 'Smoked Salmon', price: '$14.00' },
//       { name: 'Kofta Burger', price: '$11.00' },
//       { name: 'Turkish Kebab', price: '$15.50' },
//     ],
//   },
//   {
//     title: 'Sides',
//     data: [
//       { name: 'Fries', price: '$3.00', id: '11K' },
//       { name: 'Buttered Rice', price: '$3.00' },
//       { name: 'Bread Sticks', price: '$3.00' },
//       { name: 'Pita Pocket', price: '$3.00' },
//       { name: 'Lentil Soup', price: '$3.75' },
//       { name: 'Greek Salad', price: '$6.00' },
//       { name: 'Rice Pilaf', price: '$4.00' },
//     ],
//   },
//   {
//     title: 'Desserts',
//     data: [
//       { name: 'Baklava', price: '$3.00' },
//       { name: 'Tartufo', price: '$3.00' },
//       { name: 'Tiramisu', price: '$5.00' },
//       { name: 'Panna Cotta', price: '$5.00' },
//     ],
//   },
// ];

export default function MenuItems() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const colorScheme = useColorScheme();

  const Separator = () => <View style={styles.separator} />;

  const Header = () => (
    <Text style={styles.headerText}>
      View Menu
    </Text>
  );

  const Footer = () => (
    <Text style={styles.footerText}>
      All rights reserved by Little Lemon, 2024
    </Text>
  );

  const getMenu = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
      );
      const json = await response.json();
      setData(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenu()
  }, []);

  const Item = ({ name, price }) => (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{`$${price}`}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item name={item.title} price={item.price} />;

  // const renderSectionHeader = ({ section: { title } }) => (
  //   <View style={styles.sectionContainer}>
  //     <Text style={styles.sectionTitle}>{title}</Text>
  //   </View>
  // );

  return (
    <View style={[
      styles.container,
      colorScheme === "light"
        ? { backgroundColor: "#495E57" }
        : { backgroundColor: "#333333" }
    ]}>
      {
        isLoading
          ? (<ActivityIndicator size="large" />)
          : (<FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={renderItem}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={Header}
            ListFooterComponent={Footer}
          // renderSectionHeader={renderSectionHeader}
          />)
      }
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
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  itemText: {
    fontSize: 18,
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
    fontSize: 14,
    color: "#EDEFEE",
    textAlign: "center",
    padding: 10,
  },
  // sectionContainer: {
  //   backgroundColor: "#F4CE14",
  // },
  // sectionTitle: {
  //   fontSize: 26,
  //   color: "#333333",
  //   flexWrap: "wrap",
  //   textAlign: "center"
  // }
});