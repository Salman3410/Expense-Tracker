import { StyleSheet, Text, View } from "react-native";

export default function BrandHeader({ title }) {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: "#000080",
    fontWeight: "600",
    marginBottom: 10,
  },
});
