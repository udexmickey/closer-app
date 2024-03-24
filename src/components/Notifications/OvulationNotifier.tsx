import { View, Text } from "react-native";
import React from "react";
import { TextDiv, ViewDiv } from "nativewind.config";
import { AntDesign } from "@expo/vector-icons";

type headerBannerType = {
  days: number;
  date: number;
  month: string;
  // backgroundColor: string;
  // borderColor: string;

  userPhase: string;
};

const OvulationNotifier: React.FC<headerBannerType> = ({
  days,
  date,
  month,
  // backgroundColor,
  // borderColor,
  userPhase,
}) => {
  const borderColor =
    userPhase === "ovulatory"
      ? "rgba(242 109 109 / 0.6)"
      : userPhase === "luteal"
      ? "#FD7900"
      : userPhase === "follicular"
      ? "#0F9B3F"
      : userPhase === "period"
      ? "#006FFD"
      : "#red";

  const backgroundColor =
    userPhase === "ovulatory"
      ? "#FFF7FA"
      : userPhase === "luteal"
      ? "#FFF8F5"
      : userPhase === "follicular"
      ? "#F1FBF2"
      : userPhase === "period"
      ? "#F9FBFF"
      : "#red";

  const textColor =
    userPhase === "ovulatory"
      ? "#F26D6D"
      : userPhase === "luteal"
      ? "#FD7900"
      : userPhase === "follicular"
      ? "#0F9B3F"
      : userPhase === "period"
      ? "#006FFD"
      : "#red";
  return (
    <ViewDiv
      className="flex items-center text-sm rounded-2xl justify-center flexDirection-row max-w-sm w-full mx-auto"
      style={{
        borderColor: borderColor || "#F26D6D",
        borderWidth: 0.5,
        backgroundColor: backgroundColor || "#FFF7FA",
      }}
    >
      <ViewDiv className="flex flex-row justify-evenly items-center p-4">
        <TextDiv className="w-[10%]">
          <AntDesign
            name="infocirlceo"
            size={18}
            color={textColor || "#F26D6D"}
          />{" "}
          {` `}
        </TextDiv>
        <ViewDiv className="flex flex-col max-w-[270px] w-full">
          <TextDiv
            className="text-sm font-normal"
            style={{ color: textColor || "#F26D6D" }}
          >
            Your Ovulation begins in {` `}
            <TextDiv className="font-medium">
              {days ?? 4} {` `}
            </TextDiv>
            <TextDiv>days. Around{` `}</TextDiv>
            <TextDiv className="font-medium">
              {date ?? "20th"} of {month ?? "July"}
            </TextDiv>
          </TextDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default OvulationNotifier;
