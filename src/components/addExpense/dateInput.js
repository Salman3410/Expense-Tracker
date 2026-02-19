import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function DateInput({ value, onChange }) {
  const handleChange = (event, selectedDate) => {
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: value,
      onChange: handleChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Date</Text>
      <View style={styles.row}>
        <Text style={styles.subText}>{value.toDateString()}</Text>
        <TouchableOpacity
          style={styles.rightRow}
          activeOpacity={0.8}
          onPress={() => showMode("date")}
        >
          <Ionicons name="calendar" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: { flexDirection: "row" },
  row: {
    width: "100%",
    backgroundColor: "#eee",
    padding: 12,
    alignSelf: "center",
    marginTop: 10,
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
  subText: { color: "#999", fontSize: 15, marginRight: 5 },
});
