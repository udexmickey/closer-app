import React from "react";
import { ViewDiv, TextDiv, TouchableOpacityDiv } from "nativewind.config";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { View } from "react-native";

interface PhaseToolTipsProps {
  lable: string;
  subTitle: string;
  iconColor: string;
  textColor?: string;
  IconSize: any;
  onPress: (text: string) => void;
}

const PhaseToolTips: React.FC<PhaseToolTipsProps> = ({
  lable,
  subTitle,
  iconColor,
  textColor,
  IconSize,
  onPress,
}) => {
  return (
    <TouchableOpacityDiv onPress={() => onPress(lable)}>
      <ViewDiv className="flex flex-row gap-x-2 items-center">
        <SimpleLineIcons
          size={IconSize ?? 18}
          // color={iconColor ?? "#E1F1FF"}
          color={"#535C6C"}
          name="exclamation"
        />
        <TextDiv className="text-xs font-normal" style={{ color: "#535C6C" }}>
          {lable}
        </TextDiv>
      </ViewDiv>
    </TouchableOpacityDiv>
  );
};

export default PhaseToolTips;
