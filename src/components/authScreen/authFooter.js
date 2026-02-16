import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AuthFooter({ title, onPress, sub }) {
  return (
    <View style={styles.registerBox}>
      <Text style={styles.regTagline}>{title}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.forgot}>{sub}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  registerBox: {
    flexDirection: "row",
    gap: 2,
    marginTop: 10,
    paddingHorizontal: 35,
  },
  regTagline: {
    fontSize: 16,
    color: "#555",
  },
  forgot: {
    color: "#290dc5",
    fontSize: 15,
  },
});
