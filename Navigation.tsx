import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainApp from "@/App/MainApp";
import { Login } from "@/App/Authentication/Login";
import { SignupScreen } from "@/App/Authentication/Signup/signup";
import { SplashScreen } from "@/Screens/Welcome";
import { ForgetPassword } from "@/App/Authentication/ForgetPassword";
import { TextDiv, TouchableOpacityDiv, ViewDiv } from "nativewind.config";
import { AntDesign } from "@expo/vector-icons";
import { ResetPassword } from "@/App/Authentication/ResetPassword";
import Policy from "@/App/Authentication/Policy";
import Terms from "@/App/Authentication/Terms";
import AccountCreatedScreen from "@/App/OnboardingScreens/AccountCreatedScreen";
import AddSymptom from "@/App/OnboardingScreens/AddSymptom";
import OneStepCloserScreen from "@/App/OnboardingScreens/OneStepCloserScreen";
import { OtpScreen } from "@/App/OnboardingScreens/OtpScreen";
import OnboardingScreen from "@/App/OnboardingScreens";
import SymptomsCreatedScreen from "@/App/OnboardingScreens/SymptomsCreatedScreen";
import { useAuth } from "@/context/authContext";
import SetNewTaskScreen from "@/Screens/Tasks/SetNewTask/SetNewTask";
import TasksScreen from "@/Screens/Tasks/index";
import TaskAddedSuccessfullyScreen from "@/Screens/Tasks/TaskAddedSuccessfullyScreen/TaskAddedSuccessfullyScreen";
import ChangePassword from "@/Screens/Profile/screens/ChangePassword";
import PersonalInformation from "@/Screens/Profile/screens/PersonalInformation";
import { connect, useDispatch, useSelector } from "react-redux";
import { toggleEditProfile } from "@/redux/action/editProfileActions";
import ProfileScreen from "@/Screens/Profile/index";

type RootStackParamList = {
  Onboarding: {
    onboardingComplete: () => void;
    goToLogin: () => void; // Callback to navigate to login screen
    goToSignup: () => void; // Callback to navigate to signup screen
  };
  MainApp: undefined;
  Welcome: undefined;
  Login: undefined;
  SignupScreen: undefined;
  ForgetPassword: undefined;
  ResetPassword: undefined;
  Terms: undefined;
  Policy: undefined;
  OtpScreen: undefined;
  AccountCreatedScreen: undefined;
  OneStepCloserScreen: undefined;
  AddSymptom: undefined;
  SymptomsCreatedScreen: undefined;
  SetNewTaskScreen: undefined;
  TaskAddedSuccessfullyScreen: undefined;
  TasksScreen: undefined;
  Profile: undefined;
  PersonalInformation: undefined;
  ChangePassword: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { state } = useAuth();

  const navigationRef = useRef<any>();

  const BackArrow = ({
    onPress,
    backLabel,
  }: {
    onPress?: () => void;
    backLabel?: string;
  }) => (
    <TouchableOpacityDiv
      onPress={onPress}
      className="flex items-center justify-center"
    >
      <ViewDiv className="flex items-center justify-center text-center">
        <TextDiv
          style={{ marginLeft: 20 }}
          className="text-[#000000] text-lg font-semibold"
        >
          <AntDesign
            name="left"
            size={23}
            color="#000000"
            style={{ fontWeight: "600" }}
          />
          <TextDiv>{backLabel}</TextDiv>
        </TextDiv>
      </ViewDiv>
    </TouchableOpacityDiv>
  );

  const symptomsRoute = (
    <>
      <Stack.Screen
        name="AddSymptom"
        component={AddSymptom}
        options={({ navigation }) => ({
          title: "Add Symptom",
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          headerTitle: "Add Symptom",
          headerShown: true, // Override headerShown to true for ForgetPassword screen
        })}
      />
      <Stack.Screen
        name="SymptomsCreatedScreen"
        component={SymptomsCreatedScreen}
        options={({ navigation }) => ({
          title: " ",
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          headerTitle: " ",
          headerShown: false, // Override headerShown to true for ForgetPassword screen
        })}
      />
    </>
  );

  const editProfile = useSelector((state: any) => state.editProfile);
  const dispatch = useDispatch();

  const handleToggleEditProfile = (isEnabled: boolean) => {
    dispatch(toggleEditProfile(isEnabled));
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={
          state.isLoading
            ? "Welcome"
            : state.hasCompletedOnbarding
            ? "Onboarding"
            : state.userToken
            ? "MainApp"
            : "Welcome"
        }
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* when the Navigation first loads it renders the loading screen */}
        {state.isLoading ? (
          <Stack.Screen name="Welcome" component={SplashScreen} />
        ) : // when the onboarding is not completed it renders the onboarding screen
        state.userToken ? (
          <>
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen
              name="SetNewTaskScreen"
              component={SetNewTaskScreen}
              options={({ navigation }) => ({
                title: "Set New Task",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Set New Task",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="TasksScreen"
              component={TasksScreen}
              options={({ navigation }) => ({
                title: "Set New Task",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Set New Task",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="TaskAddedSuccessfullyScreen"
              component={TaskAddedSuccessfullyScreen}
              options={({ navigation }) => ({
                title: "Task Added Successfully!",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Task Added Successfully!",
                headerShown: false, // Override headerShown to true for ForgetPassword screen
              })}
            />
            {symptomsRoute}

            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={({ navigation }) => ({
                title: "Profile",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerRight: () => (
                  <TouchableOpacityDiv
                    className=" p-2 pt-0 pb-0 justify-center items-center flex-row gap-x-2"
                    onPress={() =>
                      handleToggleEditProfile(!editProfile.isEnabled)
                    }
                  >
                    <AntDesign name="edit" size={16} color="#FF4B83" />
                    <TextDiv className="text-[#FF4B83] font-medium text-sm">
                      {editProfile.isEnabled ? "Disable" : "Edit"}
                    </TextDiv>
                  </TouchableOpacityDiv>
                ),
                headerTitle: "Personal Information",
                headerShown: true,
                headerBackgroundColor: "red",
              })}
            />
            <Stack.Screen
              name="PersonalInformation"
              component={PersonalInformation}
              options={({ navigation }) => ({
                title: "Personal Information",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerRight: () => (
                  <TouchableOpacityDiv
                    className=" p-2 pt-0 pb-0 justify-center items-center flex-row gap-x-2"
                    onPress={() =>
                      handleToggleEditProfile(!editProfile.isEnabled)
                    }
                  >
                    <AntDesign name="edit" size={16} color="#FF4B83" />
                    <TextDiv className="text-[#FF4B83] font-medium text-sm">
                      {editProfile.isEnabled ? "Disable" : "Edit"}
                    </TextDiv>
                  </TouchableOpacityDiv>
                ),
                headerTitle: "Personal Information",
                headerShown: true,
                headerBackgroundColor: "red",
              })}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={({ navigation }) => ({
                title: "Change Password",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Change Password",
                headerShown: true,
              })}
            />
          </>
        ) : // when the onboarding is completed and the user is logged in it renders the main Navigation
        !state.hasCompletedOnbarding ? (
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            // component={SplashScreen}
          />
        ) : (
          <>
            {/* // else when the onboarding is completed and the user is not logged in it renders the login/signup screens */}
            <Stack.Screen
              name="Login"
              component={Login}
              options={({ navigation }) => ({
                title: "Login",
                headerLeft: () => <BackArrow backLabel="" />,
                headerTitle: "Login",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={({ navigation }) => ({
                title: "Create Your Account",
                headerLeft: () => (
                  <BackArrow
                    onPress={() => navigation.replace("Login")}
                    backLabel=""
                  />
                ),
                headerTitle: "Create Your Account",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={({ navigation }) => ({
                title: "Forget Password",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Forget Password",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={({ navigation }) => ({
                title: "Set Your New Password",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Set Your New Password",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="Terms"
              component={Terms}
              options={({ navigation }) => ({
                title: "Terms of Service",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Terms of Service",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="Policy"
              component={Policy}
              options={({ navigation }) => ({
                title: "Privacy Policy",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "Privacy Policy",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="OtpScreen"
              component={OtpScreen}
              options={({ navigation }) => ({
                title: "OTP Verification",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "OTP Verification",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="AccountCreatedScreen"
              component={AccountCreatedScreen}
              options={({ navigation }) => ({
                title: " ",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: " ",
                headerShown: false, // Override headerShown to true for ForgetPassword screen
              })}
            />
            <Stack.Screen
              name="OneStepCloserScreen"
              component={OneStepCloserScreen}
              options={({ navigation }) => ({
                title: "One Step Closer",
                headerLeft: () => (
                  <BackArrow onPress={() => navigation.goBack()} />
                ),
                headerTitle: "One Step Closer",
                headerShown: true, // Override headerShown to true for ForgetPassword screen
              })}
            />
            {symptomsRoute}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Map Redux state to component props
const mapStateToProps = (state: any) => ({
  userPhase: state.userPhase,
  editProfile: state.editProfile,
  notifications: state.notifications,
  currentUser: state.currentUser,
  toggleShowCurrentPhaseTitle: state.toggleShowCurrentPhaseTitle,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(Navigation);
