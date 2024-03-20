import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(true);

  const navigationRef = useRef<any>();

  //This function just checks if the user has already completed the onboarding and if the user is logged in or not it navigates to the onboarding screen
  const checkAuthentication = async () => {
    try {
      const hasCompletedOnboarding = await AsyncStorage.getItem(
        "hasCompletedOnboarding"
      );
      setViewedOnboarding(!hasCompletedOnboarding);

      const isAuthenticated = await AsyncStorage.getItem("isLoggedIn");
      setIsLoggedIn(Boolean(isAuthenticated));
    } catch (error) {
      await AsyncStorage.removeItem("isLoggedIn");
      throw error;
    }
    // finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    (async () => {
      await AsyncStorage.clear();
    })();

    checkAuthentication();

    return () => clearTimeout(timer);
  }, [checkAuthentication]);

  const BackArrow = ({ onPress }: { onPress?: () => void }) => (
    <TouchableOpacityDiv
      onPress={onPress}
      className="flex items-center justify-center w-32 h-12"
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
          {/* {` `} Login */}
        </TextDiv>
      </ViewDiv>
    </TouchableOpacityDiv>
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={
          isLoading
            ? "Welcome"
            : viewedOnboarding
            ? "Onboarding"
            : isLoggedIn
            ? "MainApp"
            : "Welcome"
        }
        screenOptions={{ headerShown: false }}
      >
        {/* when the Navigation first loads it renders the loading screen */}
        {isLoading ? (
          <Stack.Screen name="Welcome" component={SplashScreen} />
        ) : // when the onboarding is not completed it renders the onboarding screen
        viewedOnboarding ? (
          <>
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              // component={SplashScreen}
            />
          </>
        ) : (
          // when the onboarding is completed and the user is logged in it renders the main Navigation
          isLoggedIn && <Stack.Screen name="MainApp" component={MainApp} />
        )}
        <>
          {/* // else when the onboarding is completed and the user is not logged in it renders the login/signup screens */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              title: "Login",
              headerLeft: () => <BackArrow />,
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
                <BackArrow onPress={() => navigation.replace("Login")} />
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
          <Stack.Screen
            name="AddSymptom"
            component={AddSymptom}
            options={({ navigation }) => ({
              title: "Add Symptom",
              headerLeft: () => (
                <BackArrow onPress={() => navigation.goBack()} />
              ),
              headerTitle: "Add Symptom",
              headerShown: true, // Override headerShown to true for ForgetPassword screen
            })}
          />
          <Stack.Screen
            name="SymptomsCreatedScreen"
            component={SymptomsCreatedScreen}
            options={({ navigation }) => ({
              title: " ",
              headerLeft: () => (
                <BackArrow onPress={() => navigation.goBack()} />
              ),
              headerTitle: " ",
              headerShown: false, // Override headerShown to true for ForgetPassword screen
            })}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
