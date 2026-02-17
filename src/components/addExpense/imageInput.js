import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageInput() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={pickImage}
      >
        <Text style={styles.btnText}>Select an Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  btn: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
