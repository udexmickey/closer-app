import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MainApp from "@/App/MainApp";
import OnboardingScreen from "@/App/OnboardingScreens";
import { Login } from "@/App/Authentication/Login";
import { SignupScreen } from "@/App/Authentication/Signup/signup";
import { WelcomeScreen } from "@/Screens/Welcome";
import { useAuth } from "@/context/authContext";
import { ForgetPassword } from "@/App/Authentication/ForgetPassword";
import { TextDiv, TouchableOpacityDiv, ViewDiv } from "nativewind.config";
import { AntDesign } from "@expo/vector-icons";
import { ResetPassword } from "@/App/Authentication/ResetPassword";

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
    }, 2000);

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
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        ) : // when the onboarding is not completed it renders the onboarding screen
        viewedOnboarding ? (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
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
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
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
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
