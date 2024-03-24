import { View, Text } from "react-native";
import React, { useState } from "react";
import { ViewDiv, TextDiv } from "nativewind.config";
import CareTipsCheckBox, {
  TipsItem,
} from "@/Screens/SelfCare/careTipsCheckBox";
import sampleTips from "@/Screens/SelfCare/seed.data";

const CareTips = () => {
  const [tasks, setTasks] = useState<TipsItem[]>(sampleTips);
  return (
    <ViewDiv className="flex-col justify-center items-left gap-y-4">
      <ViewDiv className="flex flex-col justify-center items-left w-full gap-y-4 py-4 pb-8">
        <TextDiv className="font-semibold text-[#FF4B83] text-base">
          Care Tips {` `}
        </TextDiv>
        <TextDiv className="text-[#535C6C] text-sm font-normal">
          Nurture your menstrual health with personalized tips to help transform
          your symptoms
        </TextDiv>
      </ViewDiv>

      <CareTipsCheckBox
        title={"Select checkbox once an activity is completed"}
        tips={tasks}
        userPhase={"luteal"}
      />
    </ViewDiv>
  );
};

export default CareTips;
