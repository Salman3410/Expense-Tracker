import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function CustomInput({
  placeholder,
  Icon,
  iconName,
  showIcon = false,
  value,
  onChangeText,
  secure = false,
  keyboardType,
  multiline,
}) {
  const [hidden, setHidden] = useState(secure);
  return (
    <View style={styles.row}>
      {showIcon && Icon && <Icon name={iconName} size={20} color="#999" />}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={hidden}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
        keyboardType={keyboardType}
        multiline={multiline}
      />

      {/* Eye Toggle */}
      {secure && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setHidden(!hidden)}
        >
          <Feather name={hidden ? "eye-off" : "eye"} size={20} color="#999" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 6,
    marginTop: 5,
    backgroundColor: "#eee",
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  email: {
    flex: 1,
    marginLeft: 3,
  },
  password: {
    flex: 1,
    marginLeft: 3,
  },
});
