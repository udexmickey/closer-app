import { View, Button, Text } from "react-native";
import { Navigation } from "../../App/Authentication/Login";
import { ButtonDiv, TextDiv, ViewDiv } from "nativewind.config";

export function CalenderScreen({ navigation }: { navigation: Navigation }) {
  return (
    <ViewDiv
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TextDiv>Calender screen</TextDiv>
      <ButtonDiv
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
        className="bg-red-500 ring-white border-none text-green-500"
      />
      <ViewDiv className="bg-white">
        <TextDiv className="text-red-500">
          The test for tailwind in Calender screen
        </TextDiv>
      </ViewDiv>
    </ViewDiv>
  );
}
