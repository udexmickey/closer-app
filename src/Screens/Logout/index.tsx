import { Navigation } from "../../App/Authentication/Login";
import { ViewDiv } from "nativewind.config";
import { AuthButton } from "@/components/Buttons/Buttons";
import { useAuth } from "@/context/authContext";
import React from "react";

export function LogoutScreen({ navigation }: { navigation: Navigation }) {
  const { authContext } = useAuth();

  return (
    // This page will be deleted in the future. it exists for testing purposes
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
}
