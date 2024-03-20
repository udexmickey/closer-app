import React from "react";
import { CheckBox } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { TextDiv, TouchableOpacityDiv, ViewDiv } from "nativewind.config";

interface CheckboxProps {
  title: string;
  checked: boolean;
  onPress: () => void;
  onTermsPress: () => void; // Function to handle terms and conditions press
  onPolicyPress: () => void; // Function to handle terms and conditions press
}

const CheckboxInput: React.FC<CheckboxProps> = ({
  title,
  checked,
  onPress,
  onTermsPress,
  onPolicyPress,
}) => {
  return (
    <ViewDiv
      style={styles.container}
      className="flex flex-row justify-center items-center"
    >
      <CheckBox
        title={""}
        checked={checked}
        onPress={onPress}
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
        checkedColor="#FF4B83"
        uncheckedColor="#747A8B"
        //
        center
        // iconType="material"
        // checkedIcon="clear"
        // uncheckedIcon="add"
      />

      <ViewDiv className="flex flex-row justify-left items-center max-w-xs w-full wrapper flex-wrap">
        <TextDiv className="text-[#747A8B] text-sm" onPress={onTermsPress}>
          I agree to Closer’s {` `}
        </TextDiv>
        <TextDiv className="text-[#FF4B83] text-sm" onPress={onTermsPress}>
          Terms of Service
        </TextDiv>

        <TextDiv className="text-[#747A8B] text-sm">
          {` `} & {` `}
        </TextDiv>
        <TextDiv className="text-[#FF4B83] text-sm" onPress={onPolicyPress}>
          Privacy Policy
        </TextDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#4299E1",
    // padding: 8,
    // borderRadius: 6,
  },
  checkboxContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    // color: "#FF4B83",
    color: "#747A8B",
    fontSize: 14,
    // lineHeight: 21,
  },
});

export default CheckboxInput;
