import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const icons = {
  Home: { focused: "home", unfocused: "home-outline" },
  Analytics: { focused: "bar-chart", unfocused: "bar-chart-outline" },
  Settings: { focused: "settings", unfocused: "settings-outline" },
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
            style={[styles.tab, isFocused && { transform: [{ scale: 1.15 }] }]}
            activeOpacity={0.8}
          >
            <Ionicons
              name={
                isFocused
                  ? icons[route.name].focused
                  : icons[route.name].unfocused
              }
              size={20}
              color={isFocused ? "#000080" : "#999"}
            />

            <Text
              style={[
                styles.text,
                {
                  color: isFocused ? "#000080" : "#999",
                },
              ]}
            >
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
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 3,
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
  },
});
