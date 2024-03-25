import React from "react";
import {
  ImageBackgroundDiv,
  ImageDiv,
  TextDiv,
  ViewDiv,
} from "nativewind.config";
import { ImageSourcePropType } from "react-native";

type headerBannerType = {
  visible: boolean;
  user: string;
  phase: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
  phaseColor: string;
};

const HeaderBanner: React.FC<headerBannerType> = ({
  visible,
  user,
  phase,
  description,
  backgroundImage,
  backgroundColor,
  phaseColor,
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
              <ViewDiv className="text-lg max-w-md w-full flex-col">
                <TextDiv className="text-[#000000] text-3xl font-semibold max-w-full w-[65%]">
                  You’re in your
                </TextDiv>
                <TextDiv
                  className={`capitalize text-[${
                    phaseColor ?? "#FF4B83"
                  }] text-3xl font-semibold max-w-full w-[75%]`}
                  style={{
                    color: phaseColor || "#FF4B83",
                  }}
                >
                  {(visible && phase + " Phase. ") ?? "Ovulatory Phase."}
                </TextDiv>
                <TextDiv className="capitalize text-[#62565A] text-sm max-w-md w-[65%] mt-2">
                  {description ?? "Connect, Harness Your Social Superpowers 🚀"}
                </TextDiv>
              </ViewDiv>
            </ViewDiv>
          </ImageBackgroundDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default HeaderBanner;
