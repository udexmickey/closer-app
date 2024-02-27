"use client";
import {
  CloseAppButtonProps,
  AuthButtonProps,
  OutlinedButtonProps,
} from "@/utils/types/types";
import { TextDiv, TouchableOpacityDiv } from "nativewind.config";
import React from "react";

export function AuthButton({
  content,
  onClickButton,
  isRounded,
  isLoading,
  isDisabled,
  textStyle,
  ButtonStyle,
  spanRight,
  spanRightStyle,
}: AuthButtonProps) {
  return (
    <TouchableOpacityDiv
      onPress={onClickButton}
      disabled={isDisabled}
      className={`${ButtonStyle} text-center text-white flex justify-center items-center w-full mx-auto ${
        isRounded ? "rounded-full" : "rounded-[5px]"
      } p-3 cursor-pointer font-normal text-base`}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <TextDiv className={`${textStyle}`}>Loading...</TextDiv>
        </span>
      ) : (
        <TextDiv className="flex items-center justify-center text-center">
          <TextDiv className={`${textStyle}`}>{content}</TextDiv> {` `}
          {spanRight && (
            <TextDiv className={spanRightStyle} onPress={onClickButton}>
              {spanRight}
            </TextDiv>
          )}
        </TextDiv>
      )}
    </TouchableOpacityDiv>
  );
}

// export function OutlinedAppButton({
//   content,
//   onClickButton,
//   isRounded,
//   isLoading,
// }: AppButtonProps) {
//   return (
//     <TouchableOpacityDiv
//       onPress={onClickButton}
//       className={`w-full ${
//         isRounded ? "rounded-full" : "rounded-[5px]"
//       }  bg-white border border-[#EBECEF] px-6 py-4 cursor-pointer text-[#17181C] font-normal text-xl`}
//     >
//       {isLoading ? (
//         <span className="flex items-center justify-center">
//           <TextDiv>Loading...</TextDiv>
//         </span>
//       ) : (
//         <TextDiv>{content}</TextDiv>
//       )}
//     </TouchableOpacityDiv>
//   );
// }

export function ContentOutlinedButton({
  content,
  onClickButton,
  isRounded,
}: OutlinedButtonProps) {
  return (
    <button
      onClick={onClickButton}
      className={`w-full ${
        isRounded ? "rounded-full" : "rounded-[10px]"
      } text-start py-[20px] bg-white border border-[#CECECE] px-6 cursor-pointer text-[#1E1E1E] font-[500] text-[1vw]`}
    >
      {content}
    </button>
  );
}

export function CloseAppButtonModal({
  content,
  onClickButtonClose,
}: CloseAppButtonProps) {
  return (
    <button
      onClick={onClickButtonClose}
      className="w-full rounded-[5px] py-4 bg-[#F9F9FA] text-[#F07E6E] font-[600] text-[1vw]"
    >
      {content}
    </button>
  );
}

export function HeaderButton({ text, onClickButton }: any) {
  return (
    <button
      onClick={onClickButton}
      className="border border-primaryColor rounded-full px-[16px] py-[8px] text-primaryColor text-[2.5vw] font-[500] leading-4"
    >
      {text}
    </button>
  );
}
