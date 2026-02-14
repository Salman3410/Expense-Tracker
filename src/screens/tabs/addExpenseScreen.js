import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Feather,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

const Card = ({ title, sub, icon, onPress }) => {
  return (
    <View style={styles.amount}>
      <View style={styles.row}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.rightRow}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text style={styles.rowText}>{sub}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

export default function AddExpenseScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={24} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Expense</Text>
        <View></View>
      </View>
      <View style={styles.amount}>
        <View style={styles.row}>
          <Feather name="dollar-sign" size={24} color="#90EE90" />
          <Text style={styles.text}>Amount</Text>
        </View>
        <View>
          <TextInput placeholder="$0.00" keyboardType="number-pad" />
        </View>
      </View>
      <Card
        title="Category"
        sub="Shopping"
        icon={<AntDesign name="shopping" size={24} color="#FFEE8C" />}
      />
      <Card
        title="Date"
        sub="Apr 24, 2024"
        icon={<Ionicons name="calendar" size={24} color="#290dc5" />}
      />
      <Card
        title="Payement"
        sub="Debit Card"
        icon={<FontAwesome5 name="credit-card" size={24} color="#90EE90" />}
      />

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
        <TouchableOpacity activeOpacity={0.8} style={styles.addNoteBtn}>
          <Text style={styles.addNoteText}>Add Note</Text>
        </TouchableOpacity>
      </View>

      {/* Add Expense Button */}
      <TouchableOpacity style={styles.btnBox} activeOpacity={0.8}>
        <Text style={styles.btnText}>Add Expense</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  backBtn: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  backIcon: {
    color: "#000",
  },
  amount: {
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
  note: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 12,
    elevation: 2,
    marginTop: 10,
    borderRadius: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee",
    backgroundColor: "#fff",
    elevation: 1,
    marginTop: 5,
  },
  addNoteBtn: {
    width: "25%",
    backgroundColor: "#000080",
    paddingVertical: 6,
    marginTop: 10,
    borderRadius: 10,
  },
  addNoteText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
  },
  rowText: {
    color: "#999",
    fontSize: 15,
  },
  rightRow: {
    flexDirection: "row",
  },
  btnBox: {
    width: "90%",
    backgroundColor: "#000080",
    padding: 12,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "400",
  },
});
