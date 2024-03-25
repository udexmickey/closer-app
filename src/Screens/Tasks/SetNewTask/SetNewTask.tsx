import * as React from "react";
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AuthButton } from "@/components/Buttons/Buttons";
import CustomTextInput from "@/components/inputs/TextInput";
import DatePickerInput from "@/components/inputs/DatePickerInput";
import { TextDiv, TouchableOpacityDiv, ViewDiv } from "nativewind.config";
import CustomModal from "@/components/modal/CustomModal";
import TaskModal from "@/components/modal/task.modal";
import { StackNavigationProp } from "@react-navigation/stack";

export interface Navigation {
  navigation: StackNavigationProp<any, any>;
}

const SetNewTaskScreen: React.FC<Navigation> = ({ navigation }) => {
  const [task, setTask] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [startdate, setStartDate] = React.useState<Date>(new Date());
  const [enddate, setEndDate] = React.useState<Date>(new Date());
  const [isStartDateVisible, setStartDateVisible] =
    React.useState<boolean>(false);
  const [isEndDateVisible, setEndDateVisible] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const toggleStartDateVisibility = () => {
    setStartDateVisible(!isStartDateVisible);
    setEndDateVisible(false); // Close end date picker if open
  };

  const toggleEndDateVisibility = () => {
    setEndDateVisible(!isEndDateVisible);
    setStartDateVisible(false); // Close start date picker if open
  };

  const onChangeStartDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || startdate;
    setStartDate(currentDate);
    setStartDateVisible(Platform.OS === "ios"); // Close date picker on iOS
  };

  const onChangeEndDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || enddate;
    setEndDate(currentDate);
    setEndDateVisible(Platform.OS === "ios"); // Close date picker on iOS
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleSetNewTask = () => {
    const newTask = {
      task,
      category,
      startdate: startdate.getTime(), // Convert to timestamp
      enddate: enddate.getTime(), // Convert to timestamp
    };

    console.log("newTask", newTask);
    setModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };

  const modalContent = (
    <>
      <Text>Modal Content</Text>;
    </>
  );

  const proceedWithOutAddTaskSuggestion = () => {
    console.log("proceedWithOutAddTaskSuggestion");
  };

  const proceedWithAddTaskSuggestion = () => {
    console.log("proceedWithAddTaskSuggestion");
    navigation.replace("TaskAddedSuccessfullyScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1 }}>
          <TaskModal
            modalVisible={modalVisible}
            closeModal={closeModal}
            proceedWithOutAddTaskSuggestion={proceedWithOutAddTaskSuggestion}
            proceedWithAddTaskSuggestion={proceedWithAddTaskSuggestion}
          />
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ flex: 1 }}>
              <ViewDiv
                className={`w-full items-center h-full justify-center bg-white`}
              >
                <ViewDiv
                  className={`w-full max-w-sm mt-0 max-h-full h-[95%] py-4 justify-between items-start px-4 `}
                >
                  <ViewDiv className={`flex flex-col gap-4 w-full`}>
                    <ViewDiv className="space-y-2 flex w-full">
                      <CustomTextInput
                        label="Task Name"
                        placeholder="Enter task name"
                        value={task}
                        onChangeText={setTask}
                        type={"text"}
                        secureTextEntry={false}
                      />
                    </ViewDiv>

                    <ViewDiv className="space-y-2 flex w-full">
                      <CustomTextInput
                        label="Category"
                        placeholder="Select category"
                        value={category}
                        onChangeText={setCategory}
                        type={"text"}
                        secureTextEntry={false}
                      />
                    </ViewDiv>

                    <ViewDiv className="space-y-2 flex w-full">
                      <DatePickerInput
                        label="Start Date"
                        placeholder="Select start date"
                        value={startdate.toDateString()}
                        date={startdate}
                        onChangeText={onChangeStartDate}
                        type={"text"}
                        isDateVisible={isStartDateVisible}
                        toggleDateVisibility={toggleStartDateVisibility}
                      />
                    </ViewDiv>

                    <ViewDiv className="space-y-2 flex w-full">
                      <DatePickerInput
                        label="End Date"
                        placeholder="Select end date"
                        value={enddate.toDateString()}
                        date={enddate}
                        onChangeText={onChangeEndDate}
                        type={"text"}
                        isDateVisible={isEndDateVisible}
                        toggleDateVisibility={toggleEndDateVisibility}
                      />
                    </ViewDiv>
                  </ViewDiv>

                  <ViewDiv className="flex w-full gap-y-4 mt-2">
                    <AuthButton
                      content={"Set Task"}
                      onClickButton={handleSetNewTask}
                      isRounded={true}
                      isLoading={undefined}
                      isDisabled={false}
                      textStyle="text-white text-center text-lg font-semibold"
                      ButtonStyle="bg-[#FF4B83] w-full"
                    />
                  </ViewDiv>
                </ViewDiv>
              </ViewDiv>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SetNewTaskScreen;
