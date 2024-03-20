import * as React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import { AuthButton } from "@/components/Buttons/Buttons";
import GoogleLoginButton from "@/components/Buttons/GoogleLoginButton";
import CustomTextInput from "@/components/inputs/TextInput";
import {
  ViewDiv,
  TextDiv,
  PressableDiv,
  SafeAreaViewDiv,
} from "nativewind.config";
import DatePickerInput from "@/components/inputs/DatePickerInput";

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
}

export default function OneStepCloserScreen({
  navigation,
}: {
  navigation: Navigation;
}) {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<string>("3");
  const [isDateVisible, setDateVisible] = React.useState<boolean>(false);

  const toggleDateVisibility = () => {
    setDateVisible(!isDateVisible);
  };

  const onChange = ({ type }: { type: any }, selectedDate?: Date) => {
    if (type === "set") {
      const currentDate = selectedDate || date;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDateVisibility();
        setDate(currentDate);
      }
    } else {
      toggleDateVisibility();
    }
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ViewDiv
          className={`w-full items-center h-full justify-center bg-white`}
        >
          <ViewDiv
            className={`w-full max-w-sm mt-0 max-h-full h-[95%] py-4 justify-between items-start px-4 `}
          >
            <ViewDiv className={`flex flex-col gap-4 w-full`}>
              <ViewDiv className="space-y-2 flex w-full">
                <DatePickerInput
                  label="Last period Date"
                  placeholder="Enter date"
                  value={date.toDateString()}
                  date={date}
                  onChangeText={onChange}
                  type={"text"}
                  isDateVisible={isDateVisible}
                  toggleDateVisibility={toggleDateVisibility}
                />
              </ViewDiv>

              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="Period Length"
                  placeholder="Enter Period Length"
                  value={period as unknown as string}
                  onChangeText={setPeriod}
                  type={"number"}
                  maxLength={1}
                  secureTextEntry={false}
                />
              </ViewDiv>
            </ViewDiv>

            <ViewDiv className="flex w-full gap-y-4 mt-2">
              <AuthButton
                content={"Continue"}
                onClickButton={() => {
                  navigation.navigate("AddSymptom");
                }}
                isRounded={true}
                isLoading={undefined}
                isDisabled={false}
                textStyle="text-white text-center text-lg font-semibold"
                ButtonStyle="bg-[#FF4B83] w-full"
              />
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
