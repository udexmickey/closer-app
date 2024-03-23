import { View, Text } from "react-native";
import React from "react";
import { TextDiv, ViewDiv } from "nativewind.config";
import { AntDesign } from "@expo/vector-icons";

type headerBannerType = {
  days: number;
  date: number;
  month: string;
  backgroundColor: string;
  borderColor: string;
};

const OvulationNotifier: React.FC<headerBannerType> = ({
  days,
  date,
  month,
  backgroundColor,
  borderColor,
}) => {
  return (
    <ViewDiv
      className="flex items-center text-sm rounded-2xl justify-center flexDirection-row max-w-sm w-full mx-auto"
      style={{
        borderColor: borderColor || "#F26D6D",
        borderWidth: 1,
        backgroundColor: backgroundColor || "#FFF7FA",
      }}
    >
      <ViewDiv className="flex flex-row justify-evenly items-center p-4">
        <TextDiv className="w-[10%]">
          <AntDesign name="infocirlceo" size={18} color="#F26D6D" /> {` `}
        </TextDiv>
        <ViewDiv className="flex flex-col max-w-[270px] w-full">
          <TextDiv className="text-sm font-normal text-[#F26D6D]">
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
