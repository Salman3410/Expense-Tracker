import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TextLink({ title, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.forgot}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  forgot: {
    color: "#290dc5",
    fontSize: 15,
  },
});
