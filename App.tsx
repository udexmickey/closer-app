import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MenuBottom } from "@/component/menu/Bottom.menu";

import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

import MainApp from "@/App/MainApp";
import OnboardingScreen from "@/App/OnboardingScreens";

// Define the type for the Stack Navigator options
type RootStackParamList = {
  Onboarding: undefined;
  MainApp: undefined;
};

// Create the Stack Navigator with proper types
const Stack = createStackNavigator<RootStackParamList>();

//dynamic width for all devices
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        {/* On App load it shows the onboarding screen then after auth it shows the main app */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    aspectRatio: 1,
    width: windowWidth * 0.9,
    height: windowHeight * 0.9,
  },
});
