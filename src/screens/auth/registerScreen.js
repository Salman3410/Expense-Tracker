import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Fontisto, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../../components/common/customInput";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BUDGET & CO.</Text>
      <Text style={styles.greeting}>Create Your Account</Text>
      <Text style={styles.tagline}>Sign up to start managing your money</Text>

      <View style={styles.form}>
        {/* Inputs */}
        <CustomInput placeholder="Full Name" Icon={Feather} iconName="user" />
        <CustomInput
          placeholder="Email Address"
          Icon={Fontisto}
          iconName="email"
        />
        <CustomInput
          placeholder="Password"
          Icon={MaterialCommunityIcons}
          iconName="lock-outline"
          secure={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          Icon={MaterialCommunityIcons}
          iconName="lock-check-outline"
          secure={true}
        />

        {/* Remember & Forget */}
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text style={styles.regTagline}>
            By signing up, you agree to the{" "}
            <Text style={styles.regBtnText}>Terms of Service</Text> and{" "}
            <Text style={styles.regBtnText}>Privacy Policy.</Text>
          </Text>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.buttonBox}
          activeOpacity={0.8}
          onPress={() => console.log("Sign Up Pressed")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.registerBox}>
          <Text style={styles.regTagline}>Already have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.regBtnText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    color: "#000080",
    fontWeight: "600",
    marginBottom: 10,
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
  buttonBox: {
    marginTop: 20,
    backgroundColor: "#000080",
    paddingVertical: 13,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  regTagline: {
    fontSize: 16,
    color: "#555",
  },
  registerBox: {
    flexDirection: "row",
    gap: 2,
    marginTop: 10,
    paddingHorizontal: 35,
  },
  regBtnText: {
    color: "#290dc5",
    fontSize: 15,
  },
  form: {
    width: "85%",
    marginTop: 15,
  },
});
