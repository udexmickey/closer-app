import { AuthButton } from "@/components/Buttons/Buttons";
import useScreenHeight from "@/hooks/useScreenHeight";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import {
  ViewDiv,
  ImageBackgroundDiv,
  SafeAreaViewDiv,
  TextDiv,
  ImageDiv,
} from "nativewind.config";
import React, { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

type OnboardingScreenProps = {
  navigation: StackNavigationProp<any, any>;
  image: ImageSourcePropType | undefined;
  buttonText: string;
  handleActionClick: () => void;
  description: string;
  title: string;
  isLastItem: boolean;
  isFirstItem?: boolean;

  // buttonElement: JSX.Element;
  buttonElement: ReactNode;
};

const SlideOne: React.FC<OnboardingScreenProps> = ({
  navigation,
  ...props
}) => {
  const [height, width] = useScreenHeight();

  return (
    <ViewDiv
      style={{ width }}
      className={`flex justify-end items-center bg-white`}
    >
      <ImageDiv
        className="w-full h-full object-contain flex-[0.4] justify-center items-center bg-white"
        source={props.image}
        style={[{ width: width, resizeMode: "contain" }]}
      />

      <ViewDiv
        style={{ width: width * 0.75 }}
        className="flex-[0.25] items-center justify-center"
      >
        <ViewDiv>
          <TextDiv
            className={`text-center text-[#121212] font-bold max-w ${
              props.isFirstItem ? "text-2xl" : "text-2xl"
            }`}
          >
            {props.title}
          </TextDiv>
          <TextDiv className="text-center text-[#535C6C] text-sm font-normal  mx-auto">
            {props.description}
          </TextDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default SlideOne;
