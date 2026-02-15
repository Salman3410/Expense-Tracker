import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const icons = {
  Home: "home",
  Analytics: "bar-chart",
  Settings: "settings",
};

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.8}
          >
            <Ionicons
              name={icons[route.name]}
              size={24}
              color={isFocused ? "#4CC9F0" : "#999"}
            />

            <Text style={{ color: isFocused ? "#4CC9F0" : "#999" }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
    elevation: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
