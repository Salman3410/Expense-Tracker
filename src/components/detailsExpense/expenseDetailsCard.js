import { StyleSheet, View } from "react-native";

export default function ExpenseDetailsCard({ children }) {
  return <View style={styles.body}>{children}</View>;
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
  },
});
