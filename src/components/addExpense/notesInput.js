import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function NotesInput() {
  return (
    <View style={styles.note}>
      <View style={styles.row}>
        <AntDesign name="message" size={24} color="#B39EB5" />
        <Text style={styles.text}>Notes</Text>
      </View>
      <TextInput
        placeholder="Add Note"
        style={styles.input}
        numberOfLines={2}
        multiline={true}
      />
      <TouchableOpacity activeOpacity={0.8} style={styles.addBtn}>
        <Text style={styles.addText}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 12,
    elevation: 2,
    marginTop: 10,
    borderRadius: 10,
  },
  row: { flexDirection: "row" },
  text: { fontSize: 16, fontWeight: "400", marginLeft: 5 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee",
    backgroundColor: "#fff",
    elevation: 1,
    marginTop: 5,
    padding: 5,
  },
  addBtn: {
    width: "25%",
    backgroundColor: "#000080",
    paddingVertical: 6,
    marginTop: 10,
    borderRadius: 10,
  },
  addText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 12,
  },
});
