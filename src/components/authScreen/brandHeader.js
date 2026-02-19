import { StyleSheet, Text, View } from "react-native";

export default function BrandHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    color: "#000080",
    fontWeight: "700",
    marginBottom: 10,
  },
});
