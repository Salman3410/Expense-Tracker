import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import AddExpenseHeader from "../../components/addExpense/addExpenseHeader";
import AmountInput from "../../components/addExpense/amountInput";
import ExpenseBottomSheet from "../../components/addExpense/expenseBottomSheet";
import DateInput from "../../components/addExpense/dateInput";
import CategoryInput from "../../components/addExpense/categoryInput";
import PaymentInput from "../../components/addExpense/paymentInput";
import CustomButton from "../../components/common/customButton";
import TitleInput from "../../components/addExpense/titleInput";
import ImageInput from "../../components/addExpense/imageInput";

export default function AddExpenseScreen({ navigation }) {
  const bottomSheetRef = useRef(null);

  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [sheetType, setSheetType] = useState(null);
  const [category, setCategory] = useState("Shopping");
  const [payment, setPayement] = useState("Debit Card");

  const openSheet = (type) => {
    setSheetType(type);
    bottomSheetRef.current?.expand();
  };

  const onSelect = (value) => {
    if (sheetType === "category") setCategory(value);
    if (sheetType === "payment") setPayement(value);

    bottomSheetRef.current?.close();
  };
  return (
    <SafeAreaView style={styles.container}>
      <AddExpenseHeader navigation={navigation} />
      <AmountInput value={amount} onChangeText={setAmount} />
      <TitleInput value={title} onChangeText={setTitle} />
      <CategoryInput value={category} onPress={() => openSheet("category")} />
      <DateInput />
      <PaymentInput value={payment} onPress={() => openSheet("payment")} />
      <ImageInput />
      <CustomButton title="Submit" onPress={() => navigation.goBack()} />
      <ExpenseBottomSheet
        ref={bottomSheetRef}
        type={sheetType}
        onSelect={onSelect}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
