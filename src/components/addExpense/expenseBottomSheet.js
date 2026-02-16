import { Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo } from "react";

export default function ExpenseBottomSheet({ ref }) {
  const snapPoints = useMemo(() => ["18%", "40%"], []);
  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      index={-1}
      enablePanDownToClose
      backgroundStyle={{ borderRadius: 25 }}
      handleIndicatorStyle={{ backgroundColor: "#ccc" }}
    >
      <BottomSheetView>
        <Text>This is a bottom sheet!!</Text>
      </BottomSheetView>
    </BottomSheet>
  );
}
