import { StyleSheet, Text, View } from "react-native";

import CustomInput from "../common/customInput";

export default function TitleInput({ value, onChangeText }) {
  return (
    <View>
      <Text style={styles.text}>Title</Text>
      <View style={styles.title}>
        <CustomInput
          placeholder="Title"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 10,
    marginTop: 10,
  },
});
