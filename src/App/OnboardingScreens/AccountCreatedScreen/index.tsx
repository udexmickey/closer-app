import React, { useEffect } from "react";
import { ViewDiv, TextDiv, ImageDiv } from "nativewind.config";
import LottieView from "lottie-react-native";
import { AuthButton } from "@/components/Buttons/Buttons";

interface AccountCreatedScreenProps {
  navigation: any;
}

const AccountCreatedScreen: React.FC<AccountCreatedScreenProps> = ({
  navigation,
}) => {
  //   useEffect(() => {
  //     // Navigate back to OTP screen after 2 seconds
  //     const timer = setTimeout(() => {
  //       navigation.goBack();
  //     }, 2000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <ViewDiv className="justify-around items-center h-full px-8">
      <ViewDiv className="w-full justify-center items-center flex-[.5]">
        <ViewDiv className="w-28 h-28">
          <ImageDiv
            source={require("../../../assets/images/tick-circle.png")}
            className="w-full h-full object-contain"
          />
        </ViewDiv>
        <TextDiv className="text-black text-lg font-semibold mt-4">
          Account created successfully!
        </TextDiv>

        <TextDiv className="text-[#656B76] w-1/2 text-sm text-center mt-1">
          <TextDiv className="">
            Your account has been created successfully
          </TextDiv>
        </TextDiv>
      </ViewDiv>

      <ViewDiv className="flex w-full gap-y-4">
        <AuthButton
          content={"Continue"}
          onClickButton={() => {
            navigation.navigate("OneStepCloserScreen");
          }}
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

export default AccountCreatedScreen;
