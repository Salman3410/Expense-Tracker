import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function DateInput({ onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="calendar" size={24} color="#290dc5" />
        <Text style={styles.text}>Date</Text>
      </View>
      <TouchableOpacity
        style={styles.rightRow}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text style={styles.subText}>June 25, 2024</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    alignSelf: "center",
    elevation: 2,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: { flexDirection: "row" },
  rightRow: { flexDirection: "row" },
  text: { fontSize: 16, fontWeight: "400", marginLeft: 5 },
  subText: { color: "#999", fontSize: 15, marginRight: 5 },
});
