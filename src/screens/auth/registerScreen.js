import { StyleSheet, Text, View } from "react-native";
import { Fontisto, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../../components/common/customInput";
import BrandHeader from "../../components/authScreen/brandHeader";
import AuthGreeting from "../../components/authScreen/authGreeting";
import AuthFooter from "../../components/authScreen/authFooter";
import { useState } from "react";
import PrimaryButton from "../../components/authScreen/primaryButton";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(password);

  return (
    <View style={styles.container}>
      <BrandHeader title="BUDGET & CO." />
      <AuthGreeting
        title="Create Your Account"
        description="Sign up to start managing your money."
      />

      <View style={styles.form}>
        {/* Inputs */}
        <CustomInput
          placeholder="Full Name"
          Icon={Feather}
          iconName="user"
          value={name}
          onChangeText={setName}
        />
        <CustomInput
          placeholder="Email Address"
          Icon={Fontisto}
          iconName="email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          placeholder="Password"
          Icon={MaterialCommunityIcons}
          iconName="lock-outline"
          secure={true}
          value={password}
          onChangeText={setPassword}
        />
        <CustomInput
          placeholder="Confirm Password"
          Icon={MaterialCommunityIcons}
          iconName="lock-check-outline"
          secure={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={styles.terms}>
          <Text style={styles.regTagline}>
            By signing up, you agree to the{" "}
            <Text style={styles.regBtnText}>Terms of Service</Text> and{" "}
            <Text style={styles.regBtnText}>Privacy Policy.</Text>
          </Text>
        </View>

        <PrimaryButton
          title="Sign Up"
          onPress={() => console.log("Sign Up Pressed!")}
        />
        <AuthFooter
          title="Already have an account?"
          sub="Log In"
          onPress={() => navigation.goBack()}
        />
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
  terms: {
    marginTop: 20,
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
