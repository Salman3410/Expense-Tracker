import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import AddExpenseHeader from "../../components/addExpense/addExpenseHeader";
import AmountInput from "../../components/addExpense/amountInput";
import NotesInput from "../../components/addExpense/notesInput";
import SubmitExpenseButton from "../../components/addExpense/submitExpenseButton";
import ExpenseBottomSheet from "../../components/addExpense/expenseBottomSheet";
import DateInput from "../../components/addExpense/dateInput";
import CategoryInput from "../../components/addExpense/categoryInput";
import PaymentInput from "../../components/addExpense/paymentInput";

export default function AddExpenseScreen({ navigation }) {
  const bottomSheetRef = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <AddExpenseHeader navigation={navigation} />
      <AmountInput />
      <CategoryInput onPress={() => bottomSheetRef.current?.expand()} />
      <DateInput onPress={() => bottomSheetRef.current?.expand()} />
      <PaymentInput onPress={() => bottomSheetRef.current?.expand()} />
      <NotesInput />
      <SubmitExpenseButton />
      <ExpenseBottomSheet ref={bottomSheetRef} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
