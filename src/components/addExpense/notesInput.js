import { StyleSheet, Text, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import CustomInput from "../common/customInput";

export default function NotesInput({ value, onChangeText }) {
  return (
    <View>
      <Text style={styles.text}>Notes</Text>
      <View style={styles.notes}>
        <CustomInput
          placeholder="Add Note"
          value={value}
          onChangeText={onChangeText}
          multiline={true}
        />
        {/* <MaterialIcons name="event-note" size={24} color="#ccc" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 10,
    marginTop: 10,
  },
});
