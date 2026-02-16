import { StyleSheet, Text, View } from "react-native";

export default function AuthGreeting({ title, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{title}</Text>
      <Text style={styles.tagline}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  greeting: {
    fontSize: 22,
    fontWeight: "500",
  },
  tagline: {
    color: "#555",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 10,
  },
});
