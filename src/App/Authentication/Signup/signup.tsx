import { ViewDiv, TextDiv, ButtonDiv } from "nativewind.config";
import * as React from "react";
import { Button, Text, View } from "react-native";

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
  // Add other navigation methods your app uses
}

export function SignupScreen({ navigation }: { navigation: Navigation }) {
  return (
    <ViewDiv
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TextDiv className="text-red-500">Welcome to the Signup screen</TextDiv>
      <ButtonDiv
        title="Go to Main App"
        onPress={() => navigation.navigate("MainApp")}
        className="bg-red-500 ring-white border-none text-green-500"
      />
    </ViewDiv>
  );
}
