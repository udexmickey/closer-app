import React from "react";
import { ViewDiv, TextDiv, ImageDiv } from "nativewind.config";
import { AuthButton } from "@/components/Buttons/Buttons";
import { useAuth } from "@/context/authContext";
import { Alert } from "react-native";

interface TaskAddedSuccessfullyScreenProps {
  navigation: any;
}

const TaskAddedSuccessfullyScreen: React.FC<
  TaskAddedSuccessfullyScreenProps
> = ({ navigation }) => {
  const { authContext } = useAuth();

  const handleCompleteTaskAdding = () => {
    Alert.alert(
      "Success",
      "Task added successfully. You can now see it in your tasks section."
    );
    setTimeout(() => {
      navigation.navigate("TasksScreen");
    }, 2000);
  };

  return (
    <ViewDiv className="justify-around items-center h-full px-8">
      <ViewDiv className="w-full justify-center items-center flex-[.4]">
        <ViewDiv className="w-28 h-28">
          <ImageDiv
            source={require("../../../assets/images/tick-circle.png")}
            className="w-full h-full object-contain"
          />
        </ViewDiv>
        <TextDiv className="text-black text-lg font-semibold mt-4">
          Task Added Successfully!
        </TextDiv>

        <TextDiv className="text-[#535C6C] font-normal mt-4 text-sm w-[50%] text-center">
          Your task has been added successfully
        </TextDiv>
      </ViewDiv>

      <ViewDiv className="flex w-full gap-y-4">
        <AuthButton
          content={"Continue"}
          onClickButton={handleCompleteTaskAdding}
          isRounded={true}
          isLoading={undefined}
          isDisabled={false}
          textStyle="text-white text-center text-lg font-semibold"
          ButtonStyle="bg-[#FF4B83] w-full"
        />
      </ViewDiv>
    </ViewDiv>
  );
};

export default TaskAddedSuccessfullyScreen;
