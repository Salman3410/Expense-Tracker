import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../../components/common/customInput";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BUDGET & CO.</Text>
      <Text style={styles.greeting}>Welcome Back!</Text>
      <Text style={styles.tagline}>Sign in to manage your money</Text>

      <View style={styles.form}>
        {/* Inputs */}
        <CustomInput
          placeholder="Email or Username"
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

        {/* Remember & Forget */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
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
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("Forgot Password Pressed")}
          >
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.buttonBox}
          activeOpacity={0.8}
          onPress={() => login(email, password)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerBox}>
          <Text style={styles.regTagline}>Don't have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.regBtnText}>Register</Text>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 10,
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
  rememberBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  remember: {
    color: "#000080",
    fontSize: 15,
  },
  forgot: {
    color: "#290dc5",
    fontSize: 15,
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
    fontSize: 16,
  },
  form: {
    width: "85%",
    marginTop: 15,
  },
});
