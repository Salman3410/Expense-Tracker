import { Alert, ScrollView, StyleSheet } from "react-native";
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
import NotesInput from "../../components/addExpense/notesInput";
import useExpense from "../../hooks/useExpense";

export default function AddExpenseScreen({ navigation }) {
  const { addExpense } = useExpense();
  const bottomSheetRef = useRef(null);

  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [sheetType, setSheetType] = useState(null);
  const [category, setCategory] = useState("Shopping");
  const [payment, setPayement] = useState("Debit Card");
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);

  const openSheet = (type) => {
    setSheetType(type);
    bottomSheetRef.current?.present();
  };

  const onSelect = (value) => {
    if (sheetType === "category") setCategory(value);
    if (sheetType === "payment") setPayement(value);

    bottomSheetRef.current?.close();
  };

  const onSubmit = () => {
    if (!amount || !title) {
      console.log(Alert.alert("Failed", "Must enter Amount and Title."));
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      amount: Number(amount),
      title,
      note,
      category,
      payment,
      date,
      image,
    };
    addExpense(newExpense);
    navigation.goBack();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AddExpenseHeader navigation={navigation} header="Add Expense" />
      <AmountInput value={amount} onChangeText={setAmount} />
      <TitleInput value={title} onChangeText={setTitle} />
      <NotesInput value={note} onChangeText={setNote} />

      <CategoryInput value={category} onPress={() => openSheet("category")} />
      <DateInput value={date} onChange={setDate} />
      <PaymentInput value={payment} onPress={() => openSheet("payment")} />
      <ImageInput image={image} setImage={setImage} />
      <CustomButton title="Submit" onPress={onSubmit} />
      <ExpenseBottomSheet
        ref={bottomSheetRef}
        type={sheetType}
        onSelect={onSelect}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingBottom: 60,
  },
});
