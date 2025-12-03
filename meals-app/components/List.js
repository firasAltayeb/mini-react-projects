import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((i) => (
    <View key={i} style={styles.listItem}>
      <Text style={styles.itemText}>{i}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#f0ceb2",
  },
  itemText: {
    color: "#3a2d23",
    textAlign: "center",
  },
});
