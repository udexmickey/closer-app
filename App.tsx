import React from "react";
import { AppProvider } from "@/context/authContext";
import Navigation from "Navigation";

const App = () => {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
};

export default App;
