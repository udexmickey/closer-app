import { View, Text } from "react-native";
import React from "react";
import { ViewDiv, TextDiv, TouchableOpacityDiv } from "nativewind.config";
import CustomModal from "./CustomModal";

interface TaskModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  proceedWithOutAddTaskSuggestion: () => void;
  proceedWithAddTaskSuggestion: () => void;
}
const TaskModal: React.FC<TaskModalProps> = ({
  modalVisible,
  closeModal,
  proceedWithOutAddTaskSuggestion,
  proceedWithAddTaskSuggestion,
}) => {
  return (
    <CustomModal
      visible={modalVisible}
      onClose={closeModal}
      title={"Optimal Timing for Task Execution"}
    >
      <ViewDiv className="flex flex-col gap-4 ">
        <TextDiv className="text-[#535C6C] text-sm font-normal leading-5">
          This task is best executed in your Follicular phase, between
          2023-12-27 and 2024-01-04
        </TextDiv>

        <TextDiv className="text-[#535C6C] font-normal leading-5">
          Would you like to embrace this revised timeframe?
        </TextDiv>
      </ViewDiv>
      <ViewDiv className="flex flex-row gap-4 ml-auto  mt-4">
        <TouchableOpacityDiv
          className="w-max justify-center items-center  rounded-full py-2 px-3"
          onPress={proceedWithOutAddTaskSuggestion}
        >
          <TextDiv className="text-[#878FA0] text-sm font-semibold">No</TextDiv>
        </TouchableOpacityDiv>

        <TouchableOpacityDiv
          className="w-max justify-center items-center  rounded-full py-2 px-5 bg-[#FF4B83]"
          onPress={proceedWithAddTaskSuggestion}
        >
          <TextDiv className="text-[#FFFFFF] text-sm font-semibold ">
            Proceed
          </TextDiv>
        </TouchableOpacityDiv>
      </ViewDiv>
    </CustomModal>
  );
};

export default TaskModal;
