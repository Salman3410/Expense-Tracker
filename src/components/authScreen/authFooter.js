import { StyleSheet, Text, View } from "react-native";

export default function AuthFooter({ title }) {
  return (
    <View>
      <Text style={styles.regTagline}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  regTagline: {
    fontSize: 16,
    color: "#555",
  },
});
