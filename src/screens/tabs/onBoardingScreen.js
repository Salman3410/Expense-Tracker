import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BrandHeader from "../../components/authScreen/brandHeader";
import { useRef, useState } from "react";
import { ONBOARDING } from "../../utils/onBoardData";

const { width } = Dimensions.get("window");

export default function OnBoardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  const onScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(x / width));
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <BrandHeader title="BUDGET & CO." />
      <FlatList
        ref={ref}
        data={ONBOARDING}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScroll}
      />

      <View style={styles.dotsContainer}>
        {ONBOARDING.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dots,
              {
                width: currentIndex === i ? 18 : 8,
                backgroundColor: currentIndex === i ? "#000080" : "#ccc",
              },
            ]}
          />
        ))}
      </View>

      {currentIndex > -1 && (
        <TouchableOpacity
          onPress={() => navigation.replace("Login")}
          style={styles.btn}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>Let's Go</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  renderContainer: {
    width,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 30,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  dots: {
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
  btn: {
    backgroundColor: "#000080",
    marginHorizontal: 30,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 50,
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
