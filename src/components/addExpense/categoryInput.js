import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CategoryInput({ onPress, value }) {
  return (
    <View>
      <Text style={styles.text}>Category</Text>
      <View style={styles.row}>
        <Text style={styles.subText}>{value}</Text>

        <TouchableOpacity
          style={styles.rightRow}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <AntDesign name="shopping" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    backgroundColor: "#eee",
    paddingVertical: 9,
    paddingHorizontal: 10,
    alignSelf: "center",
    marginTop: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  rightRow: { flexDirection: "row" },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 10,
    marginTop: 10,
  },
  subText: { color: "#000", fontSize: 15, marginRight: 5 },
});
