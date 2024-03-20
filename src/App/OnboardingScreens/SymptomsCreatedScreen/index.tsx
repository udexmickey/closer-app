import React from "react";
import { ViewDiv, TextDiv, ImageDiv } from "nativewind.config";
import { AuthButton } from "@/components/Buttons/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/authContext";

interface SymptomsCreatedScreenProps {
  navigation: any;
}

const SymptomsCreatedScreen: React.FC<SymptomsCreatedScreenProps> = ({
  navigation,
}) => {
  const { authContext } = useAuth();

  const handleCompleteOnboarding = () => {
    // Call the setOnboardingCompleted method to update the hascompleted state
    authContext.setOnboardingCompleted(true);
    authContext.signIn();

    setTimeout(() => {
      navigation.replace("MainApp");
    }, 2000);
  };

  return (
    <ViewDiv className="justify-around items-center h-full px-8">
      <ViewDiv className="w-full justify-center items-center flex-[.4]">
        <ViewDiv className="w-28 h-28">
          <ImageDiv
            source={require("../../../assets/images/tick-circle.png")}
            className="w-full h-full object-contain"
          />
        </ViewDiv>
        <TextDiv className="text-black text-lg font-semibold mt-4">
          Symptoms successfully saved!
        </TextDiv>
      </ViewDiv>

      <ViewDiv className="flex w-full gap-y-4">
        <AuthButton
          content={"Continue"}
          onClickButton={handleCompleteOnboarding}
          isRounded={true}
          isLoading={undefined}
          isDisabled={false}
          textStyle="text-white text-center text-lg font-semibold"
          ButtonStyle="bg-[#FF4B83] w-full"
        />
      </ViewDiv>
    </ViewDiv>
  );
};

export default SymptomsCreatedScreen;
