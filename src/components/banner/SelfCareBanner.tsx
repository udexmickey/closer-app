import React from "react";
import {
  ImageBackgroundDiv,
  ImageDiv,
  TextDiv,
  ViewDiv,
} from "nativewind.config";
import { ImageSourcePropType } from "react-native";
import { UserPhaseState } from "@/redux/action/userPhaseAction";

type selfCareBannerType = {
  user: string;
  phase: string;
  description: string;
  // backgroundImage: string;
  // backgroundColor: string;
  // phaseColor: string;
  userPhase: UserPhaseState;
};

const SelfCareBanner: React.FC<selfCareBannerType> = ({
  user,
  phase,
  description,
  // backgroundImage,
  // backgroundColor,
  // phaseColor,
  userPhase,
}) => {
  const backgroundColor =
    userPhase.userPhase === "ovulatory"
      ? "#FFF7FA"
      : userPhase.userPhase === "luteal"
      ? "#FFF7F1"
      : userPhase.userPhase === "follicular"
      ? "#F7FCF7"
      : userPhase.userPhase === "period"
      ? "#E1F1FF"
      : "#FFF7FA";

  const phaseColor =
    userPhase.userPhase === "ovulatory"
      ? "#FF4B83"
      : userPhase.userPhase === "luteal"
      ? "#FD7900"
      : userPhase.userPhase === "follicular"
      ? "#0F9B3F"
      : userPhase.userPhase === "period"
      ? "#006FFD"
      : "#006FFD";

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
            className={`w-full h-64 bg-["#FFF7FA"] gap-y-6 items-center justify-start`}
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            {/* <ImageBackgroundDiv
            resizeMethod="resize"
            resizeMode="cover"
            source={backgroundImage as ImageSourcePropType}
            className={`w-full h-72 bg-["#FFF7FA"] gap-y-4 items-center justify-start`}
            style={{
              backgroundColor: backgroundColor,
            }}
          > */}
            <TextDiv className="capitalize text-[#62565A] text-base max-w-md w-full font-medium">
              Hello {user ?? "Adenike"},{" "}
            </TextDiv>
            <ViewDiv className="text-lg max-w-sm w-full flex-col">
              <TextDiv
                className={`capitalize text-[${
                  phaseColor ?? "#FF4B83"
                }] text-4xl font-semibold max-w-full w-[75%] pb-4`}
                style={{
                  color: phaseColor || "#FF4B83",
                }}
              >
                {phase ?? "Transform Your Cycle"}
              </TextDiv>
              <TextDiv className="capitalize text-[#54575D] text-sm max-w-md w-[65%] mt-2">
                {description ?? "Connect, Harness Your Social Superpowers 🚀"}
              </TextDiv>
            </ViewDiv>
            {/* </ImageBackgroundDiv> */}
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default SelfCareBanner;
