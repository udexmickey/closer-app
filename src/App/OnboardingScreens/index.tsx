import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ViewDiv } from "nativewind.config";
import OnBoarding from "./onBoarding";

type OnboardingScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  return (
    <ViewDiv className="">
      <OnBoarding navigation={navigation} />
    </ViewDiv>
  );
};

export default OnboardingScreen;
