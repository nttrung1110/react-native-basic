import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item, handlePressItem }) {
  return (
    <TouchableOpacity onPress={() => handlePressItem(item.key)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <MaterialIcons name="delete" size={18} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 8,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 4,
    borderStyle: "dashed",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
