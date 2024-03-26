import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { AuthButton } from "@/components/Buttons/Buttons";
import CustomTextInput from "@/components/inputs/TextInput";
import { useAuth } from "@/context/authContext";
import { ViewDiv, ScrollViewDiv } from "nativewind.config";
import { StackNavigationProp } from "@react-navigation/stack";
import EditAvatar from "../components/editAvatar";
import { useDispatch, useSelector } from "react-redux";

export interface Navigation {
  navigation: StackNavigationProp<any, any>;
}

const PersonalInformation: React.FC<Navigation> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>("adenikejohn@gmail.com");
  const [firstName, setFirstName] = React.useState<string>("Adenike");
  const [lastName, setLastName] = React.useState<string>("Johnson");

  const { authContext } = useAuth();
  const [disableUserDetails, setdDisableUserDetails] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<boolean>(false);

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const editProfile = useSelector((state: any) => state.editProfile);

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
            <ScrollViewDiv className={`flex flex-col gap-y-6`}>
              <ViewDiv className="mb-2">
                <EditAvatar />
              </ViewDiv>
              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="First Name"
                  placeholder="Enter first Name address"
                  value={firstName}
                  onChangeText={setFirstName}
                  type={"text"}
                  disable={editProfile.isEnabled}
                />
              </ViewDiv>

              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="Last Name"
                  placeholder="Enter last Name address"
                  value={lastName}
                  onChangeText={setLastName}
                  type={"text"}
                  disable={editProfile.isEnabled}
                />
              </ViewDiv>

              <ViewDiv className="space-y-2 flex w-full">
                <CustomTextInput
                  label="Email"
                  placeholder="Enter email address"
                  value={email}
                  onChangeText={setEmail}
                  type={"email"}
                  disable={editProfile.isEnabled}
                />
              </ViewDiv>
            </ScrollViewDiv>

            {/* save and continue button */}
            {editProfile.isEnabled ? (
              <ViewDiv className="flex w-full mt-12">
                {/* show and hide button if the edit is on */}
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
            ) : null}
          </ViewDiv>
        </ViewDiv>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default PersonalInformation;
