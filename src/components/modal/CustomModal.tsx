import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import {
  TextDiv,
  TouchableWithoutFeedbackDiv,
  ViewDiv,
} from "nativewind.config"; // Assuming these are Tailwind CSS components

interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({
  visible,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <ViewDiv
        // onPress={onClose}
        className="flex-1 justify-center items-center"
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <ViewDiv
          className={`w-full max-w-xs mt-0 max-h-max py-4 pb-8 justify-start items-start px-6 bg-white rounded-3xl`}
        >
          <ViewDiv className="flex flex-row justify-between pt-4 pb-8 w-full">
            <TextDiv className="text-sm font-semibold text-[#FF4B83]">
              {title}
            </TextDiv>
            <TouchableOpacity onPress={onClose}>
              <TextDiv className="text-sm font-semibold text-[#121212]">
                X
              </TextDiv>
            </TouchableOpacity>
          </ViewDiv>

          <ViewDiv>{children}</ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </Modal>
  );
};

export default CustomModal;
