import React from "react";
import {
  ImageBackgroundDiv,
  ImageDiv,
  TextDiv,
  TouchableOpacityDiv,
  ViewDiv,
} from "nativewind.config";
import { ImageSourcePropType } from "react-native";

type tasksBannerBannerType = {
  phase: string;
  description: string;
  // backgroundImage: string;
  backgroundColor: string;
  phaseColor: string;
  handleOnPress: () => void;
};

const TasksBannerBanner: React.FC<tasksBannerBannerType> = ({
  phase,
  description,
  // backgroundImage,
  backgroundColor,
  phaseColor,
  handleOnPress,
}) => {
  return (
    <ViewDiv className="w-full">
      <ViewDiv
        style={{
          paddingLeft: 20,
          backgroundColor: backgroundColor ?? "#FFF7FA",
        }}
      >
        <ViewDiv className="flex flex-col w-full gap-y-24 max-w-sm">
          <ViewDiv
            className={`w-full h-64 bg-["#FFF7FA"] gap-y-16 items-center justify-start`}
            style={{
              backgroundColor: backgroundColor,
            }}
          >
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
                onPress={handleOnPress}
              >
                <TextDiv className="text-white text-sm font-semibold">
                  Set New Task
                </TextDiv>
              </TouchableOpacityDiv>
            </ViewDiv>
            {/* </ImageBackgroundDiv> */}
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default TasksBannerBanner;
