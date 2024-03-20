import React, { useState } from "react";
import {
  ViewDiv,
  TextDiv,
  TextInputDiv,
  TouchableOpacityDiv,
  PressableDiv,
} from "nativewind.config";
import { Feather } from "@expo/vector-icons/";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";

interface DatePickerInputProps {
  label: string;
  value: string | Date;
  type?: "text" | "date"; // Make type optional
  onChangeText: (text: any) => any;
  placeholder: string;
  date?: Date;
  isDateVisible: boolean;
  toggleDateVisibility: () => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  label,
  value,
  type = "text", // Default to 'text' if no type is provided
  onChangeText,
  placeholder,
  date = new Date(),
  isDateVisible,
  toggleDateVisibility,
}) => {
  return (
    <ViewDiv className="space-y-2 flex w-full">
      <TextDiv
        style={{
          color: "#535C6C",
          fontWeight: "bold",
          fontSize: 15,
          // marginBottom: 1,
        }}
      >
        {label}
      </TextDiv>
      <ViewDiv style={{ flexDirection: "row", alignItems: "center" }}>
        {isDateVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            mode="date"
            is24Hour={true}
            display={"spinner"}
            value={date}
            onChange={onChangeText}
            style={{
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
            }}
          />
        )}

        {!isDateVisible && Platform.OS === "ios" ? (
          <PressableDiv onPress={toggleDateVisibility} className="w-full h-14">
            <TextInputDiv
              placeholder={placeholder}
              value={value as string}
              onChangeText={onChangeText}
              secureTextEntry={false}
              className={`w-full ring-2 border-solid border-2 p-4 rounded-xl border-[#E9EDF2] relative`}
              style={{ flex: 1 }}
              keyboardType={"default"}
              editable={false}
              onPressIn={toggleDateVisibility}
            />
          </PressableDiv>
        ) : (
          <PressableDiv onPress={toggleDateVisibility} className="w-full h-14">
            <TextInputDiv
              placeholder={placeholder}
              value={value as string}
              onChangeText={onChangeText}
              secureTextEntry={false}
              className={`w-full ring-2 border-solid border-2 p-4 rounded-xl border-[#E9EDF2] relative`}
              style={{ flex: 1 }}
              keyboardType={"default"}
              editable={false}
              onPressIn={toggleDateVisibility}
            />
          </PressableDiv>
        )}

        {type === "text" && (
          <TouchableOpacityDiv
            onPress={toggleDateVisibility}
            className="absolute right-4 isolate"
          >
            <Feather name="calendar" size={18} color="#8F9098" />
          </TouchableOpacityDiv>
        )}
      </ViewDiv>

      {isDateVisible && Platform.OS === "ios" && (
        <ViewDiv className="w-full flex-row justify-around">
          <TouchableOpacityDiv onPress={toggleDateVisibility}>
            <TextDiv className="text-red-400 text-xl uppercase">cancel</TextDiv>
          </TouchableOpacityDiv>

          <TouchableOpacityDiv onPress={toggleDateVisibility}>
            <TextDiv className="text-red-400 text-xl uppercase">ok</TextDiv>
          </TouchableOpacityDiv>
        </ViewDiv>
      )}
    </ViewDiv>
  );
};

export default DatePickerInput;
