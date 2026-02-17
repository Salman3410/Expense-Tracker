import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function DateInput({}) {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
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
      <View style={styles.row}>
        <Ionicons name="calendar" size={24} color="#290dc5" />
        <Text style={styles.text}>Date</Text>
      </View>
      <TouchableOpacity
        style={styles.rightRow}
        activeOpacity={0.8}
        onPress={showDatepicker}
      >
        <Text style={styles.subText}>{date.toDateString()}</Text>

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
