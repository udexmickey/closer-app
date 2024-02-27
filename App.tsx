import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MainApp from "@/App/MainApp";
import OnboardingScreen from "@/App/OnboardingScreens";
import { Login } from "@/App/Authentication/Login";
import { SignupScreen } from "@/App/Authentication/Signup/signup";
import { WelcomeScreen } from "@/Screens/Welcome";

type RootStackParamList = {
  Onboarding: {
    onboardingComplete: () => void;
    goToLogin: () => void; // Callback to navigate to login screen
  };
  MainApp: undefined;
  Welcome: undefined;
  Login: undefined;
  SignupScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const navigationRef = useRef<any>();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const hasCompletedOnboarding = await AsyncStorage.getItem(
      "hasCompletedOnboarding"
    );
    setShowOnboarding(!hasCompletedOnboarding);

    const isAuthenticated = await AsyncStorage.getItem("isLoggedIn");
    setIsLoggedIn(Boolean(isAuthenticated));
  };

  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem("hasCompletedOnboarding", "true");
    setShowOnboarding(false);
  };

  const handleLogin = async () => {
    await AsyncStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const unsubscribe = navigationRef.current?.addListener("state", () => {
      // Check if the current screen is Onboarding and set options accordingly
      const routeName = navigationRef.current?.getCurrentRoute()?.name;
      if (routeName === "Onboarding") {
        navigationRef.current?.setOptions({
          headerShown: false,
          onboardingComplete: handleOnboardingComplete,
        });
      }
    });

    return unsubscribe;
  }, []);

  const goToLogin = () => {
    navigationRef.current?.navigate("Login");
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={
          showOnboarding ? "Onboarding" : isLoggedIn ? "MainApp" : "Welcome"
        }
        screenOptions={{ headerShown: false }}
      >
        {showOnboarding ? (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : isLoggedIn ? (
          <Stack.Screen name="MainApp" component={MainApp} />
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
