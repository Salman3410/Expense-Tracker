import { StyleSheet, View } from "react-native";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../../components/common/customInput";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import BrandHeader from "../../components/authScreen/brandHeader";
import AuthGreeting from "../../components/authScreen/authGreeting";
import TextLink from "../../components/authScreen/textLink";
import RememberMeRow from "../../components/authScreen/rememberMeRow";
import AuthFooter from "../../components/authScreen/authFooter";
import PrimaryButton from "../../components/authScreen/primaryButton";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <BrandHeader title="BUDGET & CO." />
      <AuthGreeting
        title="Welcome Back!"
        description="Sign in to manage your money"
      />

      <View style={styles.form}>
        {/* Inputs */}
        <CustomInput
          placeholder="Email or Username"
          Icon={Fontisto}
          iconName="email"
          value={email}
          onChangeText={setEmail}
          showIcon={true}
        />
        <CustomInput
          placeholder="Password"
          Icon={MaterialCommunityIcons}
          iconName="lock-outline"
          secure={true}
          value={password}
          onChangeText={setPassword}
          showIcon={true}
        />

        {/* Remember & Forget */}
        <View style={styles.rememberRow}>
          <RememberMeRow />
          <TextLink
            title="Forgot password?"
            onPress={() => console.log("Forgot Password Pressed!")}
          />
        </View>

        <PrimaryButton title="Login" onPress={() => login(email, password)} />
        <AuthFooter
          title="Don't have an account?"
          sub="Register"
          onPress={() => navigation.navigate("Register")}
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
  input: {
    width: "100%",
  },
  email: {
    flex: 1,
    marginLeft: 3,
  },
  password: {
    flex: 1,
    marginLeft: 3,
  },
  rememberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  forgot: {
    color: "#290dc5",
    fontSize: 15,
  },

  registerBox: {
    flexDirection: "row",
    gap: 2,
    marginTop: 10,
    paddingHorizontal: 35,
  },
  regBtnText: {
    color: "#290dc5",
    fontSize: 16,
  },
  form: {
    width: "85%",
    marginTop: 15,
  },
});
