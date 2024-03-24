import { AuthButton } from "@/components/Buttons/Buttons";
import { useAuth } from "@/context/authContext";
import { ImageDiv, TextDiv, ViewDiv } from "nativewind.config";
import React from "react";

const MarketPlaceScreen = () => {
  const { authContext } = useAuth();
  return (
    <ViewDiv
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      className="bg-white mx-auto"
    >
      <ImageDiv
        className="w-full h-full object-contain max-w-[150px] max-h-[150px] mx-auto"
        resizeMode="contain"
        resizeMethod="resize"
        source={require("../../assets/images/coming-soon.png")}
      />
      <TextDiv className="text-[#535C6C] text-base text-center font-semibold mt-2">
        Coming Soon
      </TextDiv>
    </ViewDiv>
  );
};

export default MarketPlaceScreen;
