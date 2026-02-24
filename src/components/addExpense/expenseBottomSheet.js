import { Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback } from "react";

const categories = ["Shopping", "Subscription", "Exchange"];
const payments = ["Debit Card", "Credit Card", "JazzCash", "EasyPaisa"];

const ExpenseBottomSheet = forwardRef(({ type, onSelect }, ref) => {
  const data =
    type === "payment" ? payments : type === "category" ? categories : [];

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={ref}
      enableDynamicSizing={true}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{ borderRadius: 25, backgroundColor: "#fff" }}
      handleIndicatorStyle={{ backgroundColor: "#ccc" }}
    >
      <BottomSheetView style={styles.container}>
        {data.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.item}
            onPress={() => onSelect(item)}
            activeOpacity={0.8}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </BottomSheetView>
    </BottomSheetModal>
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
