import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ViewDiv, TextDiv, ScrollViewDiv } from "nativewind.config";
import { AuthButton } from "@/components/Buttons/Buttons";
import SlideOne from "./slides/SlideOne";
import Stepper from "./stepper";
import Slides from "./slides";
import OnBoarding from "./onBoarding";

type OnboardingScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handleSkip = () => {
    navigation.navigate("LoginScreen");
  };

  const handleGoToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const handleGoToSignup = () => {
    console.log("====================================");
    console.log("Go to Signup screen");
    console.log("====================================");
    navigation.navigate("SignupScreen");
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <SlideOne
            navigation={navigation}
            image={require("../../assets/images/onboard-slide-1.png")}
            title={"Own Your Menstrual Cycle. Plan, Track, Thrive!"}
            description={""}
            handleSkip={handleSkip}
            handleActionClick={handleGoToLogin}
            buttonElement={undefined}
            buttonText={"Next"}
            isLastItem={!(step < totalSteps - 1) ? true : false}
            isFirstItem={step === 0 ? true : false}
          />
        );
      case 1:
        return (
          <SlideOne
            navigation={navigation}
            image={require("../../assets/images/onboard-slide-2.png")}
            title={"Track, Build, Achieve"}
            description={
              "Harness the power of each phase of your menstrual cycle."
            }
            handleSkip={handleSkip}
            handleActionClick={handleGoToLogin}
            buttonElement={undefined}
            buttonText={"Next"}
            isLastItem={!(step < totalSteps - 1) ? true : false}
          />
        );
      case 2:
        return (
          <SlideOne
            navigation={navigation}
            image={require("../../assets/images/onboard-slide-3.png")}
            title={"Sync, Cycle and Schedule"}
            description={
              "Your cycle data - it’s safe and syncs with your work and life plan."
            }
            handleSkip={handleSkip}
            handleActionClick={handleGoToLogin}
            buttonElement={undefined}
            buttonText={"Next"}
            isLastItem={!(step < totalSteps - 1) ? true : false}
          />
        );
      case 3:
        return (
          <SlideOne
            navigation={navigation}
            image={require("../../assets/images/onboard-slide-4.png")}
            buttonText={"Next"}
            isLastItem={!(step < totalSteps - 1) ? true : false}
            title={"End Period Poverty for Good"}
            description={
              "For every confidence goal achieved, you are a few points closer to ending period poverty."
            }
            handleSkip={handleSkip}
            handleActionClick={handleGoToLogin}
            buttonElement={OnboardButton}
          />
        );
      default:
        return null;
    }
  };

  const OnboardButton = (
    <ViewDiv className="space-y-3 flex w-[90%] mt-10">
      <ViewDiv className="text-white">
        <AuthButton
          content="Get Started"
          onClickButton={handleGoToSignup}
          isRounded={true}
          isLoading={undefined}
          isDisabled={false}
          textStyle="text-white text-center text-base font-medium"
          ButtonStyle="bg-[#2B0A60] w-full"
        />
      </ViewDiv>
      <ViewDiv>
        <AuthButton
          content="Already have an account?"
          onClickButton={handleGoToLogin}
          isRounded={true}
          isLoading={undefined}
          isDisabled={false}
          spanRight={"Log In"}
          spanRightStyle="text-[#2B0A60] font-medium"
          textStyle="text-[#17181C] font-medium text-base text-center"
          ButtonStyle="bg-white border border-[#EBECEF]"
        />
      </ViewDiv>
    </ViewDiv>
  );

  return (
    // <ViewDiv
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     width: "100%",
    //     justifyContent: "center",
    //     display: "flex",
    //     alignItems: "center",
    //   }}
    //   className="relative bg-green-600 hidden"
    // >
    //   <ViewDiv
    //     style={{ flex: 1 }}
    //     // contentContainerStyle={{ flexGrow: 1 }}
    //   >
    //     {/* {renderStep()} */}
    //     <Slides />
    //   </ViewDiv>
    //   <ViewDiv
    //     style={{
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       width: "100%",
    //       // justifyContent: "center",
    //       paddingHorizontal: 20,
    //       display: "flex",
    //       alignItems: "center",
    //       position: "absolute",
    //       // top: 0,
    //       right: 0,
    //       left: 0,
    //       bottom: !(step < totalSteps - 1) ? 50 : 70,
    //     }}
    //   >
    //     <ViewDiv
    //       className={`${
    //         !(step < totalSteps - 1) ? "space-y-4" : "space-y-6"
    //       } flex w-full max-w-screen-sm`}
    //     >
    // <ViewDiv style={styles.stepperContainer}>
    //   <Stepper currentStep={step} totalSteps={totalSteps} />
    // </ViewDiv>
    // {!(step < totalSteps - 1) ? (
    //   OnboardButton
    // ) : (
    //   <ViewDiv className="space-y-3 flex w-full">
    //     <AuthButton
    //       content={"Next"}
    //       onClickButton={handleNext}
    //       isRounded={true}
    //       isLoading={undefined}
    //       isDisabled={false}
    //       textStyle="text-white text-center text-lg font-semibold"
    //       ButtonStyle="bg-[#2B0A60] w-full"
    //     />
    //   </ViewDiv>
    // )}
    //     </ViewDiv>
    //   </ViewDiv>
    // </ViewDiv>
    <ViewDiv className="">
      <OnBoarding navigation={navigation} />
    </ViewDiv>
  );
};

const styles = StyleSheet.create({
  stepperContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default OnboardingScreen;
