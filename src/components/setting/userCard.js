import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function UserCard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Salman Saeed");
  const [email, setEmail] = useState("salman.123@gmail.com");
  const [image, setImage] = useState(require("../../../assets/images/Mi.jpeg"));

  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempImage, setTempImage] = useState(image);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      aspect: [1, 1],
      allowsEditing: true,
    });

    if (!result.canceled) {
      setTempImage({ uri: result.assets[0].uri });
    }
  };
  return (
    <View style={styles.innerContainer}>
      <View style={styles.userCard}>
        <Image source={image} style={styles.image} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.editBtn}
        onPress={() => {
          setTempName(name);
          setTempEmail(email);
          setTempImage(image);
          setModalVisible(true);
        }}
      >
        <Text style={styles.editText}>Edit</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
      </TouchableOpacity>

      <Modal transparent animationType="slide" visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Edit Profile</Text>

            <TouchableOpacity
              style={styles.avatarPicker}
              onPress={pickImage}
              activeOpacity={0.8}
            >
              <Image source={tempImage} style={styles.modalImage} />
              <Text style={styles.changePhoto}>Change photo</Text>
            </TouchableOpacity>

            <TextInput
              placeholder="Name"
              value={tempName}
              onChangeText={setTempName}
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              value={tempEmail}
              onChangeText={setTempEmail}
              style={styles.input}
            />

            <View style={styles.modalButtons}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.cancel}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setName(tempName);
                  setEmail(tempEmail);
                  setImage(tempImage);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.save}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 2,
    marginTop: 10,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  userInfo: {
    marginLeft: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
  },
  email: {
    color: "#999",
    fontSize: 14,
    fontWeight: "400",
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    fontWeight: "500",
    color: "#999",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  avatarPicker: {
    alignItems: "center",
    marginBottom: 15,
  },
  modalImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 6,
  },
  changePhoto: {
    color: "#000080",
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    marginTop: 10,
  },
  cancel: {
    color: "#888",
    fontWeight: "600",
  },
  save: {
    color: "#000080",
    fontWeight: "600",
  },
});
