import { AuthButton } from "@/components/Buttons/Buttons";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import {
  ViewDiv,
  ImageBackgroundDiv,
  SafeAreaViewDiv,
  TextDiv,
} from "nativewind.config";
import React, { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

type OnboardingScreenProps = {
  navigation: StackNavigationProp<any, any>;
  image: ImageSourcePropType | undefined;
  buttonText: string;
  handleSkip: () => void;
  handleActionClick: () => void;
  description: string;
  title: string;
  isLastItem: boolean;
  isFirstItem?: boolean;

  // buttonElement: JSX.Element;
  buttonElement: ReactNode;
};

const SlideThree: React.FC<OnboardingScreenProps> = ({
  navigation,
  ...props
}) => {
  return (
    <ViewDiv
      className={`w-screen max-h-screen h-full flex-1 flex items-stretch justify-end`}
    >
      <ImageBackgroundDiv
        source={props.image}
        accessibilityLabel={`Closer splashbanner`}
        resizeMethod="resize"
        resizeMode="cover"
        className={`h-screen w-screen flex flex-1 items-center justify-end`}
      >
        <ViewDiv
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.1)",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SafeAreaViewDiv
            className={`max-w-screen w-full max-h-screen h-full flex items-stretch justify-end ${
              props.isLastItem ? "mb-[430px]" : "mb-72"
            }`}
          >
            <ViewDiv className="flex items-center justify-center gap-y-24 ">
              <ViewDiv>
                <TextDiv
                  className={`text-center text-[#FFFFFF] font-bold max-w-xs ${
                    props.isFirstItem ? "text-4xl" : "text-2xl"
                  }`}
                >
                  {/* Track, Build, Achieve */}
                  {props.title}
                </TextDiv>
                <TextDiv className="text-center text-gray-300 text-base max-w-[264px]">
                  {props.description}
                </TextDiv>
              </ViewDiv>

              {/* {OnboardButton} */}
              {/* {props.buttonElement ? (
                props.buttonElement
              ) : (
                <ViewDiv className="space-y-3 flex w-[90%]">
                  <AuthButton
                    content={props.buttonText}
                    onClickButton={props.handleActionClick}
                    isRounded={true}
                    isLoading={undefined}
                    isDisabled={false}
                    textStyle="text-white text-center text-lg font-semibold"
                    ButtonStyle="bg-[#2B0A60] w-full"
                  />
                </ViewDiv>
              )} */}
              {/* {OnboardButton} */}
            </ViewDiv>
          </SafeAreaViewDiv>
        </ViewDiv>
      </ImageBackgroundDiv>
    </ViewDiv>
  );
};

export default SlideThree;
