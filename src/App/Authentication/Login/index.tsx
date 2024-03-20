import { AuthButton } from "@/components/Buttons/Buttons";
import GoogleLoginButton from "@/components/Buttons/GoogleLoginButton";
import CustomTextInput from "@/components/inputs/TextInput";
import { useAuth } from "@/context/authContext";
import { ViewDiv, PressableDiv, TextDiv } from "nativewind.config";
import * as React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
  // Add other navigation methods your app uses
}

export function Login({ navigation }: { navigation: Navigation }) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

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
            <>
              <GoogleLoginButton />

              <ViewDiv className={"items-center my-8"}>
                <ViewDiv
                  className={
                    "w-full h-px bg-gray-200 justify-center items-center flex"
                  }
                />
                <TextDiv
                  className={
                    "absolute px-3 font-light text-xs text-gray-900 bg-white right-1/3 transform -translate-x-1/2 text-center -bottom-2 isolate-50 translate-y-1/2"
                  }
                >
                  or log in with email
                </TextDiv>
              </ViewDiv>
            </>

            <ViewDiv className={`flex flex-col gap-4`}>
              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="Email"
                  placeholder="Enter email address"
                  value={email}
                  onChangeText={setEmail}
                  secureTextEntry
                  type={"email"}
                />
              </ViewDiv>

              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="Password"
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter password"
                  secureTextEntry
                  type={"password"}
                />
              </ViewDiv>
            </ViewDiv>

            <ViewDiv
              className={`flex flex-row justify-between items-center my-8`}
            >
              <PressableDiv
                className={`text-[#FF4B83] font-medium text-xs ml-auto`}
              >
                <TextDiv
                  className={`text-[#FF4B83] font-medium text-xs underline`}
                  onPress={() => {
                    navigation.navigate("ForgetPassword");
                  }}
                >
                  Forgot Password?
                </TextDiv>
              </PressableDiv>
            </ViewDiv>

            <ViewDiv className="flex w-full mt-12">
              <ViewDiv className="flex w-full gap-y-4">
                <AuthButton
                  content={"Login"}
                  onClickButton={() => authContext.signIn()}
                  isRounded={true}
                  isLoading={undefined}
                  isDisabled={false}
                  textStyle="text-white text-center text-lg font-semibold"
                  ButtonStyle="bg-[#FF4B83] w-full"
                />

                <TextDiv className="flex items-center justify-center text-center">
                  <TextDiv className={`font-normal text-sm text-[#878FA0]`}>
                    Don’t have an account?
                  </TextDiv>{" "}
                  {` `}
                  <TextDiv
                    className={`font-medium text-sm text-[#FF4B83]`}
                    onPress={() => navigation.navigate("SignupScreen")}
                  >
                    Sign Up
                  </TextDiv>
                </TextDiv>
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
