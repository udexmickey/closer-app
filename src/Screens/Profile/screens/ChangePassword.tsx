import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { AuthButton } from "@/components/Buttons/Buttons";
import CustomTextInput from "@/components/inputs/TextInput";
import { useAuth } from "@/context/authContext";
import { ViewDiv, ScrollViewDiv } from "nativewind.config";
import { StackNavigationProp } from "@react-navigation/stack";
import EditAvatar from "../components/editAvatar";

export interface Navigation {
  navigation: StackNavigationProp<any, any>;
}

const ChangePassword: React.FC<Navigation> = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = React.useState<string>("");
  const [newPassword, setNewPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

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
          <ViewDiv
            className={`px-2 w-full max-w-sm mt-8 justify-between h-[90%]`}
          >
            <ScrollViewDiv className={`flex flex-col gap-y-4`}>
              <ViewDiv className="mb-10">
                <EditAvatar />
              </ViewDiv>

              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="Current Password"
                  placeholder="Enter current Password"
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                  secureTextEntry
                  disable={true}
                  type={"password"}
                />
              </ViewDiv>

              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="New Password"
                  placeholder="Enter new Password"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  type={"password"}
                />
              </ViewDiv>

              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="Confirm new password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm new password"
                  secureTextEntry
                  type={"password"}
                />
              </ViewDiv>
            </ScrollViewDiv>

            {/* save and continue button */}

            <ViewDiv className="flex w-full mt-12">
              <ViewDiv className="flex w-full gap-y-4">
                <AuthButton
                  content={"Save"}
                  onClickButton={() => authContext.signIn()}
                  isRounded={true}
                  isLoading={undefined}
                  isDisabled={false}
                  textStyle="text-white text-center text-lg font-semibold"
                  ButtonStyle="bg-[#FF4B83] w-full"
                />
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ChangePassword;
