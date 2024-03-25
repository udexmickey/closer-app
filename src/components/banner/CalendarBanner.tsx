import React from "react";
import {
  ImageBackgroundDiv,
  ImageDiv,
  TextDiv,
  TouchableOpacityDiv,
  ViewDiv,
} from "nativewind.config";
import { ImageSourcePropType } from "react-native";

type selfCareBannerType = {
  user: string;
  phase: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
  phaseColor: string;
  handleMonitorWellness: () => void;
};

const SelfCareBanner: React.FC<selfCareBannerType> = ({
  user,
  phase,
  description,
  backgroundImage,
  backgroundColor,
  phaseColor,
  handleMonitorWellness,
}) => {
  return (
    <ViewDiv className="w-full">
      <ViewDiv
        style={{
          backgroundColor: backgroundColor ?? "#FFF7FA",
        }}
      >
        <ViewDiv className="flex flex-col max-w-md w-full gap-y-24">
          <ImageBackgroundDiv
            resizeMethod="resize"
            resizeMode="cover"
            source={backgroundImage as ImageSourcePropType}
            className={`w-full h-72 bg-["#FFF7FA"] gap-y-4 items-center justify-start`}
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            <ViewDiv
              style={{ paddingLeft: 20 }}
              className="flex flex-col max-w-md w-full gap-y-4 items-start justify-start"
            >
              <TextDiv className="capitalize text-[#62565A] text-base max-w-md w-full font-medium">
                Hello {user ?? "Adenike"},{" "}
              </TextDiv>
              <ViewDiv className="text-lg max-w-sm w-full flex-col">
                <TextDiv
                  className={`capitalize text-[${
                    phaseColor ?? "#FF4B83"
                  }] text-4xl font-semibold max-w-full w-[75%] pb-2`}
                  style={{
                    color: phaseColor || "#FF4B83",
                  }}
                >
                  {phase ?? "Transform Your Cycle"}
                </TextDiv>
                <TextDiv className="capitalize text-[#54575D] text-xs font-normal max-w-md w-[80%] mt-2">
                  {description ?? "Connect, Harness Your Social Superpowers 🚀"}
                </TextDiv>

                <TouchableOpacityDiv
                  className="my-4 justify-center items-center text-white rounded-full py-2 px-3 bg-[#FF4B83] max-w-max w-[32%]"
                  onPress={handleMonitorWellness}
                >
                  <TextDiv className="text-white text-sm font-semibold">
                    Set New Task
                  </TextDiv>
                </TouchableOpacityDiv>
              </ViewDiv>
            </ViewDiv>
          </ImageBackgroundDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default SelfCareBanner;
