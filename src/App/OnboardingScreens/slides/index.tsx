import React from "react";
import { TextDiv, ViewDiv } from "nativewind.config";
import useScreenHeight from "@/hooks/useScreenHeight";
import SvgUri from "react-native-svg-uri";
// import Group from "../../../assets/svg/Group.svg";

// const TestSvg = () => (
//   <SvgUri
//     width="200"
//     height="200"
//     svgXmlData={require("../../../../assets/svg/girl-check-mark.svg")}
//   />
// );

export default function Slides() {
  const [height, width] = useScreenHeight();

  return (
    <ViewDiv
      style={{ height: height }}
      className={`w-screen max-h-[${height}px] bg-blue-700 justify-center items-center`}
    >
      <ViewDiv className="rounded-full aspect-square h-auto w-[80%] shadow-inner border-red-600 border-8 border-solid whitespace-pre-wrap justify-center items-center">
        <TextDiv className="text-white">{`Slides circle ${height}px`}</TextDiv>
      </ViewDiv>
    </ViewDiv>
  );
}
