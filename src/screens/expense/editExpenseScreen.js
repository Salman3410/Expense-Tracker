import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddExpenseHeader from "../../components/addExpense/addExpenseHeader";
import AmountInput from "../../components/addExpense/amountInput";
import { useEffect, useRef, useState } from "react";
import TitleInput from "../../components/addExpense/titleInput";
import NotesInput from "../../components/addExpense/notesInput";
import CategoryInput from "../../components/addExpense/categoryInput";
import DateInput from "../../components/addExpense/dateInput";
import PaymentInput from "../../components/addExpense/paymentInput";
import CustomButton from "../../components/common/customButton";
import ExpenseBottomSheet from "../../components/addExpense/expenseBottomSheet";
import ImageInput from "../../components/addExpense/imageInput";
import { useRoute } from "@react-navigation/native";
import useExpense from "../../hooks/useExpense";

export default function EditExpenseScreen({ navigation }) {
  const route = useRoute();
  const { id } = route.params;

  const { expenses, editExpense } = useExpense();

  const bottomSheetRef = useRef(null);

  const [amount, setAmount] = useState();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [sheetType, setSheetType] = useState(null);
  const [category, setCategory] = useState("");
  const [payment, setPayement] = useState("");
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);

  const expense = expenses.find((item) => item.id.toString() === id.toString());

  useEffect(() => {
    if (expense) {
      setAmount(expense.amount.toString());
      setTitle(expense.title);
      setNote(expense.note);
      setCategory(expense.category);
      setPayement(expense.payment);
      setDate(new Date(expense.date));
      setImage(expense.image);
    }
  }, [expense]);

  const openSheet = (type) => {
    setSheetType(type);
    bottomSheetRef.current?.present();
  };

  const onSelect = (value) => {
    if (sheetType === "category") setCategory(value);
    if (sheetType === "payment") setPayement(value);

    bottomSheetRef.current?.close();
  };

  function handleUpdate() {
    if (!amount || !title) return;

    editExpense(expense.id, {
      amount: Number(amount),
      title,
      note,
      category,
      payment,
      date: date.toISOString(),
      image,
    });
    navigation.goBack();
  }

  if (!expense) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AddExpenseHeader header="Edit Expense" navigation={navigation} />
      <AmountInput value={amount} onChangeText={setAmount} />
      <TitleInput value={title} onChangeText={setTitle} />
      <NotesInput value={note} onChangeText={setNote} />
      <CategoryInput value={category} onPress={() => openSheet("category")} />
      <DateInput value={date} onChangeText={setDate} />
      <PaymentInput value={payment} onPress={() => openSheet("payment")} />
      <ImageInput image={image} setImage={setImage} />
      <CustomButton title="Update Expense" onPress={handleUpdate} />
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
