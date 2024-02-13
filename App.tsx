import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Welcome from "@/Screens/Welcome";
import { HomeScreen, SettingsScreen } from "@/Screens/login";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <SafeAreaView>
    //     <View style={styles.container}>
    //       <Welcome
    //         name={"Welcome"}
    //         image={require("./assets/closer-image.png")}
    //       />
    //       <StatusBar style="auto" />
    //     </View>
    //   </SafeAreaView>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === 'Home') {
        //       iconName = focused
        //         ? 'ios-information-circle'
        //         : 'ios-information-circle-outline';
        //     } else if (route.name === 'Settings') {
        //       iconName = focused ? 'ios-list' : 'ios-list-outline';
        //     }

        //     // You can return any component that you like here!
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        //   tabBarActiveTintColor: 'tomato',
        //   tabBarInactiveTintColor: 'gray',
        // })}
        screenOptions={{ headerShown: true }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
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
