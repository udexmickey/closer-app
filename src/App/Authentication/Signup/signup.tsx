import AppleLoginButton from "@/components/Buttons/AppleLoginButton";
import { AuthButton } from "@/components/Buttons/Buttons";
import GoogleLoginButton from "@/components/Buttons/GoogleLoginButton";
import CheckboxInput from "@/components/inputs/CheckBoxInput";
import CustomTextInput from "@/components/inputs/TextInput";
import { useAuth } from "@/context/authContext";
import {
  ViewDiv,
  PressableDiv,
  ButtonDiv,
  TextInputDiv,
  TextDiv,
  ScrollViewDiv,
} from "nativewind.config";
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

export function SignupScreen({ navigation }: { navigation: Navigation }) {
  const [fullName, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confrimPassword, setconfrimPassword] = React.useState<string>("");

  const [isRemembered, setIsRemembered] = React.useState<boolean>(false);

  const handlePress = () => {
    setIsRemembered(!isRemembered);
  };

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
          <ScrollViewDiv>
            <ViewDiv className={`px-2 w-full max-w-sm mt-1`}>
              <ViewDiv className={"my-6"}>
                <ViewDiv className={`flex flex-col gap-4 space-y-3`}>
                  <ViewDiv>
                    <GoogleLoginButton />
                  </ViewDiv>
                  <ViewDiv>
                    <AppleLoginButton />
                  </ViewDiv>
                </ViewDiv>
              </ViewDiv>

              <ViewDiv className={`flex flex-col gap-4`}>
                <ViewDiv className="space-y-2 flex w-full">
                  <CustomTextInput
                    label="FullName"
                    placeholder="Enter fullName address"
                    value={fullName}
                    onChangeText={setFullName}
                    secureTextEntry
                    type={"text"}
                  />
                </ViewDiv>

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

                <ViewDiv className="space-y-2 flex w-full">
                  <CustomTextInput
                    label="Confirm Password"
                    value={confrimPassword}
                    onChangeText={setconfrimPassword}
                    placeholder="Enter password"
                    secureTextEntry
                    type={"password"}
                  />
                </ViewDiv>
              </ViewDiv>

              <ViewDiv
                className={`flex flex-row justify-between items-center my-4`}
              >
                <ViewDiv className={`flex-row items-center`}>
                  <CheckboxInput
                    title={`I agree to Closer’s`}
                    checked={isRemembered}
                    onPress={handlePress}
                    onTermsPress={() => navigation.navigate("Terms")}
                    onPolicyPress={() => navigation.navigate("Policy")}
                  />
                </ViewDiv>
              </ViewDiv>

              <ViewDiv className="flex w-full mt-4">
                <ViewDiv className="flex w-full gap-y-4">
                  <AuthButton
                    content={"Continue"}
                    onClickButton={() => navigation.navigate("OtpScreen")}
                    isRounded={true}
                    isLoading={undefined}
                    isDisabled={false}
                    textStyle="text-white text-center text-lg font-semibold"
                    ButtonStyle="bg-[#FF4B83] w-full"
                  />
                </ViewDiv>
              </ViewDiv>
            </ViewDiv>
          </ScrollViewDiv>
        </ViewDiv>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
