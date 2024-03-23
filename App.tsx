import React from "react";
import { AuthProvider } from "@/context/authContext";
import Navigation from "Navigation";
import { StatusBar } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

const App = () => {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Navigation />
      </PaperProvider>
    </AuthProvider>
  );
};

export default App;
