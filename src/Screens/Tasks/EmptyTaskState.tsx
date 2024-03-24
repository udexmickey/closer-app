import { View, Text } from "react-native";
import React from "react";
import { ViewDiv, ImageDiv, TextDiv } from "nativewind.config";

const EmptyTaskState = () => {
  return (
    <ViewDiv className="flex-col justify-center items-center h-64">
      <ImageDiv
        className="w-full object-contain max-w-[150px] max-h-[150px] mx-auto justify-center items-center"
        resizeMode="contain"
        resizeMethod="resize"
        source={require("../../assets/images/Empty-task-State.png")}
      />
      <TextDiv className="text-[#535C6C] text-base text-center font-medium max-w-[230px] w-[70%]">
        You have not set a task yet. Go to ‘Set new task’ to add a task
      </TextDiv>
    </ViewDiv>
  );
};

export default EmptyTaskState;
