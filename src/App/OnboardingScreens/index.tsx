import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Rect, Path, G, TSpan } from "react-native-svg";
import {
  SafeAreaViewDiv,
  ViewDiv,
  ImageBackgroundDiv,
  TextDiv,
  ImageDiv,
  TouchableOpacityDiv,
} from "nativewind.config";
import { AppButton, OutlinedAppButton } from "@/components/Buttons/Buttons";

type OnboardingScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const image1 = {
  uri: "https://res.cloudinary.com/dtuims4ku/image/upload/v1701817278/Rectangle_571_ifgga6.svg",
};

const image2 = {
  uri: "https://res.cloudinary.com/dtuims4ku/image/upload/v1701815462/auth-banner-fotor-20231205233037_fhxmwr.png",
};

// const image = {require("../../assets/images/women-standing-together-caring-eachother.jpeg")};

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate("MainApp");
  };

  const handleGoToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const handleGoToSignup = () => {
    navigation.navigate("SignupScreen");
  };

  const OnboardButton = (
    <ViewDiv
    // style={styles.actionBtn}
    >
      <TouchableOpacityDiv
        // style={styles.actionBtn1}
        onPress={handleGoToSignup}
      >
        <TextDiv
        // style={styles.buttonText1}
        >
          Join Closer
        </TextDiv>
      </TouchableOpacityDiv>

      <TouchableOpacityDiv
        // style={styles.actionBtn2}
        onPress={handleGoToLogin}
      >
        <TextDiv
        //
        // style={styles.buttonText2}
        >
          Already have an account?{`  `}
          <TextDiv
            style={{
              color: "#2B0A60",
              fontWeight: "bold",
              fontSize: 16,
            }}
            onPress={handleGoToLogin}
          >
            Log In
          </TextDiv>
        </TextDiv>
      </TouchableOpacityDiv>
    </ViewDiv>
    // <ViewDiv className="space-y-5">
    //   <AppButton
    //     content="Get Started"
    //     onClickButton={handleGoToSignup}
    //     isRounded={true}
    //     isLoading={undefined}
    //     type="button"
    //     isDisabled={false}
    //   />
    //   <OutlinedAppButton
    //     content="Already have an account? Log In"
    //     onClickButton={handleGoToLogin}
    //     isRounded={true}
    //     isLoading={undefined}
    //     type="button"
    //     isDisabled={false}
    //   />
    // </ViewDiv>
  );

  return (
    <ViewDiv
      // style={styles.container}
      className="flex-1 bg-yellow-500"
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
        {/* slide 1 */}
        <ViewDiv
          // style={styles.slide1}
          className={`h-[${windowHeight}px] flex-1 items-center justify-center`}
        >
          <LinearGradient
            colors={["#F9F9F9", "#2B0A60"]} // Array of gradient colors
            start={{ x: 0, y: 0 }} // Start point (top-left)
            end={{ x: 0, y: 1 }} // End point (bottom-left)

            // style={styles.gradientBackground}
          >
            <ImageBackgroundDiv
              source={image2}
              // style={styles.bgImageStyle}
              accessibilityLabel={`Closer welcome banner`}
              resizeMethod="resize"
              resizeMode="cover"
              className={`h-screen w-screen flex items-center justify-center`}
            >
              <TextDiv
                // style={styles.slideTextContent}
                className="text-center text-white text-2xl leading-10 max-w-xs font-bold"
              >
                Own Your Menstrual Cycle: Plan, Track, Thrive!
              </TextDiv>
              {OnboardButton}
            </ImageBackgroundDiv>
          </LinearGradient>
        </ViewDiv>

        {/* // slide 2 */}
        <ViewDiv
          // style={styles.slide}
          className={`w-screen h-screen flex items-center justify-center`}
        >
          <ViewDiv className="flex items-center justify-center h-[390px] w-[390px]">
            <ImageDiv
              source={image2}
              className={`h-full w-full rounded-full object-contain`}
            />
          </ViewDiv>
          {/* <ImageBackgroundDiv
            source={image2}
            // style={styles.bgImageStyle}
            accessibilityLabel={`Closer welcome banner`}
            resizeMethod="resize"
            resizeMode="cover"
            className={`h-screen w-screen object-cover flex items-center justify-center`}
          > */}
          <TextDiv
            // style={styles.slideTextContent}
            className="text-center text-white text-2xl leading-10 max-w-xs font-bold"
          >
            Own Your Menstrual Cycle: Plan, Track, Thrive!
          </TextDiv>
          {OnboardButton}
          {/* </ImageBackgroundDiv> */}
        </ViewDiv>
      </Swiper>
    </ViewDiv>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  wrapper: {
    height: windowHeight,
  },

  slide1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight,
    width: windowWidth,
  },
  gradientBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bgImageStyle: {
    width: "100%",
    height: "100%",
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

  // slideTextHeader: {
  //   color: "white",
  //   fontSize: 24,
  //   fontWeight: "bold", // Apply bold font weight
  //   marginBottom: 10,
  // },

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#9DD6EB",
  },
  // bgImageStyle: {
  //   justifyContent: "center",
  //   resizeMode: "contain",
  //   width: "100%",
  //   height: "100%",
  //   flex: 1,
  // },

  image: {
    // aspectRatio: 1,
    // width: 390,
    // height: 390,
    // flexGrow: 1,
    // width: windowWidth * 0.8,
    // height: windowHeight * 0.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },

  image3: {
    // aspectRatio: 1,
    width: windowWidth * 0.8,
    height: windowHeight * 0.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
    justifyContent: "center", // Adjust as needed
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

  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});

export default OnboardingScreen;
