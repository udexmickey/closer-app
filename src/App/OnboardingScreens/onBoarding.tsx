import React, { useEffect, useRef, useState } from "react";
import {
  TextDiv,
  ViewDiv,
  FlatListDiv,
  SafeAreaViewDiv,
} from "nativewind.config";
import useScreenHeight from "@/hooks/useScreenHeight";
import { slidersData } from "./slidersDatas";
import SlideOne from "./slides/SlideOne";
import { StackNavigationProp } from "@react-navigation/stack";
import { Animated } from "react-native";
import Stepper from "./stepper";
import { AuthButton } from "@/components/Buttons/Buttons";
import { storeLocalStorageData } from "@/hooks/useLocalStorage";

type OnboardingScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const OnBoarding: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const totalSteps = slidersData.length;

  const [currentStep, setCurrentStep] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewAbleItemChange = useRef(({ viewableItems }: any) =>
    setCurrentStep(viewableItems[0].index)
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const sliderRef = useRef<any>(null);

  const [height, width] = useScreenHeight();

  const handleSkip = () => {
    navigation.navigate("LoginScreen");
  };
  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  // Now you can use goToLogin safely
  const handleGoToLogin = () => {
    storeLocalStorageData("hasCompletedOnboarding", "true");
    navigation.replace("Login");
  };

  const handleGoToSignup = () => {
    storeLocalStorageData("hasCompletedOnboarding", "true");
    navigation.replace("SignupScreen");
  };

  useEffect(() => {
    if (currentStep === totalSteps - 1) {
      storeLocalStorageData("hasCompletedOnboarding", "true");
    }
  }, [currentStep]);

  const scrollToNext = () => {
    if (currentStep < totalSteps - 1) {
      sliderRef.current.scrollToIndex({ index: currentStep + 1 });
    } else {
      // it won't do anything since the last screen have the login and signup buttons
      return;
    }
  };
  const OnboardButton = (
    <ViewDiv className="space-y-3 flex w-full">
      <ViewDiv>
        <AuthButton
          content="Login"
          onClickButton={handleGoToLogin}
          isRounded={true}
          isLoading={undefined}
          isDisabled={false}
          // spanRight={"Log In"}
          spanRightStyle="text-[#FF4B83] font-medium"
          textStyle="text-[#17181C] font-medium text-base text-center"
          ButtonStyle="bg-white border border-[#E9EDF2]"
        />
      </ViewDiv>
      <ViewDiv className="text-white">
        <AuthButton
          content="Sign Up"
          onClickButton={handleGoToSignup}
          isRounded={true}
          isLoading={undefined}
          isDisabled={false}
          textStyle="text-white text-center text-base font-medium"
          ButtonStyle="bg-[#FF4B83] w-full"
        />
      </ViewDiv>
    </ViewDiv>
  );

  return (
    <ViewDiv
      style={{
        height,
        width,
        backgroundColor: "white",
      }}
      className={`justify-baseline items-baseline`}
    >
      <ViewDiv
        style={{
          maxHeight: !(currentStep < totalSteps - 1)
            ? height * 0.65
            : height * 0.7,
          width,
          height: "100%",
        }}
      >
        <FlatListDiv
          data={slidersData}
          renderItem={({ item }: { item: any }) => (
            <SlideOne
              image={item?.image}
              title={item?.title}
              description={item?.description}
              navigation={navigation}
              handleSkip={handleSkip}
              handleActionClick={handleGoToLogin}
              buttonElement={undefined}
              buttonText={"Next"}
              isLastItem={!(step < totalSteps - 1) ? true : false}
              isFirstItem={step === 0 ? true : false}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item?.id}
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewAbleItemChange}
          // snapToAlignment={"start"}
          viewabilityConfig={viewConfig}
          ref={sliderRef}
        />
      </ViewDiv>

      <SafeAreaViewDiv
        style={{ width: width * 0.9 }}
        className="mx-auto w-full justify-center items-center flex"
      >
        <ViewDiv
          style={{}}
          className="mx-auto justify-center items-center flex"
        >
          <Stepper data={slidersData} scrollX={scrollX} />
        </ViewDiv>
        {!(currentStep < totalSteps - 1) ? (
          OnboardButton
        ) : (
          <ViewDiv className="space-y-3 flex w-full">
            <AuthButton
              content={"Next"}
              onClickButton={scrollToNext}
              isRounded={true}
              isLoading={undefined}
              isDisabled={false}
              textStyle="text-white text-center text-lg font-semibold"
              ButtonStyle="bg-[#FF4B83] w-full"
            />
          </ViewDiv>
        )}
      </SafeAreaViewDiv>
    </ViewDiv>
  );
};

export default OnBoarding;
