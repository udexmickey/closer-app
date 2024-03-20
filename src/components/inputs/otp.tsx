import React, { useState, useRef, useEffect } from "react";
import { ViewDiv, TextDiv, TextInputDiv } from "nativewind.config";
import { AuthButton } from "../Buttons/Buttons";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";

interface OTPScreenProps {
  onSubmit?: (otp: string) => void;
  navigation: any;
}

const OTPScreen: React.FC<OTPScreenProps> = ({ onSubmit, navigation }) => {
  const [otp, setOTP] = useState<string[]>(["", "", "", "", ""]);
  const [error, setError] = useState<boolean>(false);
  const [retryTimer, setRetryTimer] = useState<number>(60); // Initial retry timer value in seconds
  const inputsRef = useRef<TextInput[] | any>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRetryTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOTPChange = (index: number, text: string) => {
    if (text === "") {
      // Clear the current input
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        newOTP[index] = "";
        return newOTP;
      });

      // Move focus to the previous input if available
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    } else if (/^\d$/.test(text)) {
      // Update the OTP value if it's a digit
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        newOTP[index] = text;
        return newOTP;
      });

      // Move focus to the next input if available
      if (index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleInputFocus = (index: number) => {
    setError(false); // Hide error message when input is focused
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join("");
    // Check if entered OTP is correct
    const isCorrect = enteredOTP === "12345"; // Example: Change "12345" to your correct OTP
    isCorrect && navigation.replace("AccountCreatedScreen");
    setError(!isCorrect);
  };

  return (
    <ViewDiv className={`flex-1 justify-left items-left h-full w-full gap-y-4`}>
      <ViewDiv className={`flex-row justify-left items-center`}>
        {otp.map((value, index) => (
          <TextInputDiv
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref!)}
            className={`h-10 w-10 mx-2.5 border border-[#E9EDF2] rounded-md text-center text-black font-medium text-base justify-center items-center flex ${
              error ? "border-red-500" : ""
            }`}
            onChangeText={(text) => handleOTPChange(index, text)}
            onFocus={() => handleInputFocus(index)}
            value={value}
            keyboardType="numeric"
            maxLength={1}
            editable={true}
          />
        ))}
      </ViewDiv>

      {/* Error message */}
      {error && (
        <TextDiv className="text-[#EB0606] text-sm mb-2">
          Incorrect Code
        </TextDiv>
      )}

      {/* Retry countdown timer */}
      <TextDiv className="text-gray-600 mb-2">
        <TextDiv
          className="text-[#B8B8B8] text-sm"
          onPress={() => {
            alert("19876");
          }}
        >
          Resend code? {` `}
        </TextDiv>
        (00:{retryTimer < 10 ? `0${retryTimer}` : retryTimer})
      </TextDiv>

      {/* Continue OTP button */}
      <ViewDiv className="flex w-full mt-12">
        <ViewDiv className="flex w-full gap-y-4">
          <AuthButton
            content={"Continue"}
            onClickButton={handleSubmit}
            isRounded={true}
            isLoading={undefined}
            isDisabled={false}
            textStyle="text-white text-center text-lg font-semibold"
            ButtonStyle="bg-[#FF4B83] w-full"
          />
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default OTPScreen;
