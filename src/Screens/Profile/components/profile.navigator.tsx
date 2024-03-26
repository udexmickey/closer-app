import React, { ReactNode } from "react";
import { ViewDiv, TextDiv, TouchableOpacityDiv } from "nativewind.config";

export interface ProfileNavigatorMenuProps {
  title: string;
  leftIcon: ReactNode;
  rightIcon?: ReactNode;
  handlePress?: (text: string) => void;
}

const ProfileNavigatorMenu: React.FC<ProfileNavigatorMenuProps> = ({
  title,
  leftIcon,
  rightIcon,
  handlePress,
}) => {
  const onPressHandler = () => {
    if (handlePress) {
      handlePress(title); // Pass the title to the handlePress function
    }
  };

  return (
    <ViewDiv className="flex flex-row justify-between items-center p-4 rounded-lg mt-1 bg-[#FEF9F0]">
      <ViewDiv className="flex flex-row justify-between items-center gap-x-3">
        <ViewDiv className="font-medium text-[#3A3C42] text-sm">
          {leftIcon}
        </ViewDiv>
        <TextDiv className="font-medium text-[#535C6C] text-sm">
          {title}
        </TextDiv>
      </ViewDiv>
      <TouchableOpacityDiv
        className="font-medium text-[#878FA0] text-sm"
        onPress={onPressHandler}
      >
        {rightIcon}
      </TouchableOpacityDiv>
    </ViewDiv>
  );
};

export default ProfileNavigatorMenu;
