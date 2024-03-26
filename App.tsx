import React from "react";
import { AuthProvider } from "@/context/authContext";
import Navigation from "Navigation";
import { StatusBar } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider } from "react-redux";
import store from "@/redux/store/store";

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
    <Provider store={store}>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
