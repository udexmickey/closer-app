import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type OnboardingScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handleContinue = () => {
    navigation.navigate("MainApp");
  };

  return (
    // <SafeAreaView style={styles.container}>
    <LinearGradient
      colors={["#FFFFFF", "#FFCDEA"]} // Array of gradient colors
      start={{ x: 0, y: 0 }} // Start point (top-left)
      end={{ x: 0, y: 1 }} // End point (bottom-left)
      style={styles.gradientBackground}
    >
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={true}
        autoplay={true}
        paginationStyle={styles.paginationStyle} // Set pagination style
        dotStyle={styles.dotStyle} // Style for inactive dot
        activeDotStyle={styles.activeDotStyle} // Style for active dot
      >
        <SafeAreaView style={styles.slide}>
          <Text style={styles.slideTextHeader}>Track, Build, Achieve</Text>
          <Text style={styles.slideTextContent}>
            Take control of your menstrual health with ease, one goal at a time
          </Text>
          <Image
            source={require("../../assets/images/ovulation-image.png")}
            style={styles.image}
            accessibilityLabel={`Closer welcome banner`}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </SafeAreaView>
        <SafeAreaView style={styles.slide}>
          <Text style={styles.slideTextHeader}>Achieve Confidence Goals</Text>
          <Text style={styles.slideTextContent}>
            Take control of your menstrual health with ease, one goal at a time.
          </Text>
          <Image
            source={require("../../assets/images/Ellipse 1.png")}
            style={styles.image}
            accessibilityLabel={`Closer welcome banner`}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </SafeAreaView>
        <SafeAreaView style={styles.slide}>
          <Text style={styles.slideTextHeader}>
            End Period Poverty for Good
          </Text>
          <Text style={styles.slideTextContent}>
            For every confidence goal achieved, you are a few points closer to
            ending period poverty.
          </Text>
          <Image
            source={require("../../assets/images/Group 3.png")}
            style={styles.image3}
            accessibilityLabel={`Closer welcome banner`}
            resizeMethod="resize"
            resizeMode="contain"
          />
          <SafeAreaView style={styles.actionBtn}>
            <TouchableOpacity
              style={styles.actionBtn1}
              onPress={handleContinue}
            >
              <Text style={styles.buttonText1}>Join Closer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionBtn2}
              onPress={handleContinue}
            >
              <Text style={styles.buttonText2}>
                Already have an account?{`  `}
                <Text
                  style={{ color: "#2B0A60", fontWeight: "bold", fontSize: 16 }}
                >
                  Log In
                </Text>
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </Swiper>
    </LinearGradient>
    // {/* </SafeAreaView> */}
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  gradientBackground: {
    flex: 1,
    backgroundColor: "white", // Fallback color
  },

  wrapper: {
    height: 400,
  },

  slide: {
    // flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  slideContent: {
    alignItems: "center",
    marginBottom: 20, // Adjust spacing between content and image
  },

  slideTextHeader: {
    fontSize: 24,
    lineHeight: 32.78,
    textAlign: "center",
    fontWeight: "700",
    color: "#2E2E2E",
  },

  slideTextContent: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    color: "#2E2E2E",
    lineHeight: 21.8,
  },

  paginationStyle: {
    // position: "absolute",
    // top: 0, // Position at the top of the screen
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,.2)",
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 10,
  },

  activeDotStyle: {
    width: 28,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2B0A60", // Active dot color
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 10, // Adjust margin bottom to move dots down if needed
  },

  image: {
    // aspectRatio: 1,
    // width: 390,
    // height: 390,
    // flexGrow: 1,
    width: windowWidth * 0.8,
    height: windowHeight * 0.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image3: {
    // aspectRatio: 1,
    width: windowWidth * 0.8,
    height: windowHeight * 0.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  actionBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.8,
    gap: 16,
  },

  actionBtn1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.8,
    backgroundColor: "#2B0A60",
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },

  actionBtn2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.8,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },

  buttonText1: {
    color: "white",
  },

  buttonText2: {
    color: "#17181C",
  },
});

export default OnboardingScreen;
