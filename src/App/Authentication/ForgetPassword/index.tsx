import { AuthButton } from "@/components/Buttons/Buttons";
import CustomTextInput from "@/components/inputs/TextInput";
import { useAuth } from "@/context/authContext";
import { ViewDiv, TextDiv } from "nativewind.config";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native";

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
  // Add other navigation methods your app uses
}

export function ForgetPassword({ navigation }: { navigation: Navigation }) {
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
            <TextDiv className={`text-sm font-normal mb-12 text-[#656B76]`}>
              Enter your e-mail to reset it!
            </TextDiv>
            <ViewDiv className={`flex flex-col gap-4`}>
              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="Email"
                  placeholder="Enter email address"
                  value={email}
                  onChangeText={setEmail}
                  secureTextEntry={false}
                  type="email"
                />
              </ViewDiv>
            </ViewDiv>

            <ViewDiv className="flex w-full mt-12">
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

                <TextDiv
                  className="flex items-center justify-center text-center"
                  onPress={() => navigation.navigate("Login")}
                >
                  <TextDiv>
                    <AntDesign name="left" size={12} color="#878FA0" />
                  </TextDiv>
                  {` `}
                  <TextDiv
                    className={`font-medium text-sm text-inherit text-[#878FA0]`}
                  >
                    Go back to login screen
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
