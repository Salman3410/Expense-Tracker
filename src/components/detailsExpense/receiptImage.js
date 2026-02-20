import { StyleSheet, Text, View, Image } from "react-native";

export default function ReceiptImage({ source }) {
  return (
    <View style={styles.imageBorder}>
      <Text style={styles.text}>Receipt:</Text>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageBorder: {
    padding: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginTop: 10,
  },
});
