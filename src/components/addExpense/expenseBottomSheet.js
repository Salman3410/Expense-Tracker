import { Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, forwardRef } from "react";

const categories = ["Shopping", "Subscription", "Exchange"];
const payments = ["Debit Card", "Credit Card", "JazzCash", "EasyPaisa"];

const ExpenseBottomSheet = forwardRef(({ type, onSelect }, ref) => {
  const snapPoints = useMemo(() => ["18%", "35%"], []);

  const data =
    type === "payment" ? payments : type === "category" ? categories : [];

  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      index={-1}
      enablePanDownToClose
      backgroundStyle={{ borderRadius: 25 }}
      handleIndicatorStyle={{ backgroundColor: "#ccc" }}
    >
      <BottomSheetView style={styles.container}>
        {data.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.item}
            onPress={() => onSelect(item)}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default ExpenseBottomSheet;

const styles = StyleSheet.create({
  container: { padding: 20 },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  text: { fontSize: 16 },
});
