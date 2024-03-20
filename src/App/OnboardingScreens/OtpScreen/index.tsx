import { AuthButton } from "@/components/Buttons/Buttons";
import CustomTextInput from "@/components/inputs/TextInput";
import { useAuth } from "@/context/authContext";
import { ViewDiv, TextDiv } from "nativewind.config";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import OTPScreen from "@/components/inputs/otp";

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
  // Add other navigation methods your app uses
}

export function OtpScreen({ navigation }: { navigation: Navigation }) {
  const [email, setEmail] = React.useState<string>("");

  const { authContext } = useAuth();

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
          className={`flex-1 w-full items-center justify-start bg-white`}
        >
          <ViewDiv className={`px-4 w-full max-w-sm mt-8`}>
            <ViewDiv className="flex flex-row justify-left items-center max-w-xs w-full wrapper flex-wrap mb-12">
              <TextDiv className="text-sm font-normal text-[#656B76]">
                Enter the 5-digit code we sent to your {` `}
                <TextDiv className="text-[#FF4B83] text-sm">
                  email address
                </TextDiv>
              </TextDiv>
            </ViewDiv>

            <ViewDiv className={`flex flex-col gap-4`}>
              <ViewDiv className="space-y-2 flex w-full h-28">
                {/* <CustomTextInput
                  label="Email"
                  placeholder="Enter email address"
                  value={email}
                  onChangeText={setEmail}
                  secureTextEntry={false}
                  type="email"
                /> */}
                <OTPScreen
                  // onSubmit={function (otp: string): void {
                  //   throw new Error("Function not implemented.");
                  // }}
                  navigation={navigation}
                />
              </ViewDiv>
            </ViewDiv>

            {/* <ViewDiv className="flex w-full mt-12">
              <ViewDiv className="flex w-full gap-y-4">
                <AuthButton
                  content={"Confirm"}
                  onClickButton={() => navigation.navigate("ResetPassword")}
                  isRounded={true}
                  isLoading={undefined}
                  isDisabled={false}
                  textStyle="text-white text-center text-lg font-semibold"
                  ButtonStyle="bg-[#FF4B83] w-full"
                />
              </ViewDiv>
            </ViewDiv> */}
          </ViewDiv>
        </ViewDiv>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
