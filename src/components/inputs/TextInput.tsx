import React, { useState } from "react";
import {
  ViewDiv,
  TextDiv,
  TextInputDiv,
  TouchableOpacityDiv,
} from "nativewind.config";
import { Feather } from "@expo/vector-icons";

interface CustomTextInputProps {
  label: string;
  value: string;
  type?: "number" | "text" | "email" | "password"; // Make type optional
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  maxLength?: number;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  type = "text", // Default to 'text' if no type is provided
  onChangeText,
  placeholder,
  secureTextEntry = false,
  maxLength,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

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
        <TextInputDiv
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={
            type === "password" ? !isPasswordVisible : secureTextEntry
          }
          className={`w-full ring-2 border-solid border-2 p-4 rounded-xl border-[#E9EDF2] relative`}
          style={{ flex: 1 }}
          keyboardType={
            type === "number"
              ? "numeric"
              : type === "email"
              ? "email-address"
              : "default"
          } // Set keyboardType based on type
          maxLength={maxLength}
        />
        {type === "password" && (
          <TouchableOpacityDiv
            onPress={togglePasswordVisibility}
            className="absolute right-4 isolate"
          >
            <TextDiv>
              {isPasswordVisible ? (
                <Feather name="eye" size={18} color="#8F9098" />
              ) : (
                <Feather name="eye-off" size={18} color="#8F9098" />
              )}
            </TextDiv>
          </TouchableOpacityDiv>
        )}
      </ViewDiv>
    </ViewDiv>
  );
};

export default CustomTextInput;
