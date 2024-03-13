import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MainApp from "@/App/MainApp";
import OnboardingScreen from "@/App/OnboardingScreens";
import { Login } from "@/App/Authentication/Login";
import { SignupScreen } from "@/App/Authentication/Signup/signup";
import { WelcomeScreen } from "@/Screens/Welcome";
import { AppProvider, useAuth } from "@/context/authContext";
import Navigation from "Navigation";

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
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
};

export default App;
