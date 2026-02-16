import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function RememberMeRow() {
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.rememberBox}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setRemember(!remember)}
      >
        <MaterialCommunityIcons
          name={remember ? "checkbox-marked" : "checkbox-blank-outline"}
          size={24}
          color={remember ? "#000" : "#999"}
        />
      </TouchableOpacity>
      <Text style={styles.remember}>Remember Me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rememberBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  remember: {
    color: "#000080",
    fontSize: 15,
  },
});
