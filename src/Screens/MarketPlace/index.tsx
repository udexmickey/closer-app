import { AuthButton } from "@/components/Buttons/Buttons";
import { useAuth } from "@/context/authContext";
import { ViewDiv } from "nativewind.config";
import React from "react";

const MarketPlaceScreen = () => {
  const { authContext } = useAuth();
  return (
    <ViewDiv
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 20,
      }}
    >
      <AuthButton
        content={"LogOut"}
        onClickButton={() => authContext.signOut()}
        isRounded={true}
        isLoading={undefined}
        isDisabled={false}
        textStyle="text-white text-center text-lg font-semibold"
        ButtonStyle="bg-[#FF4B83] w-full"
      />
    </ViewDiv>
  );
};

export default MarketPlaceScreen;
