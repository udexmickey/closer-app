import { SplashScreen } from "@/Screens/Welcome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CalenderScreen } from "@/Screens/Calender";
import { SelfCareScreen } from "@/Screens/SelfCare";
import { ProfileScreen } from "@/Screens/Profile";
import { HomeScreen } from "@/Screens/Home";
import { MenuBottom } from "./Bottom.menu";
import { Ionicons, Feather } from "@expo/vector-icons";
import { TouchableOpacityDiv, ViewDiv, TextDiv } from "nativewind.config";
import React from "react";

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  const BackArrow = ({ onPress }: { onPress?: () => void }) => (
    <ViewDiv className="flex items-center justify-center text-center flex-row gap-x-4 pr-6 w-32 h-12">
      <TouchableOpacityDiv
        onPress={onPress}
        className="flex items-center justify-center"
      >
        <Ionicons name="notifications-outline" size={22} />
      </TouchableOpacityDiv>
      <TouchableOpacityDiv
        onPress={onPress}
        className="flex items-center justify-center"
      >
        <Feather name="eye-off" size={22} color="black" />
      </TouchableOpacityDiv>
    </ViewDiv>
  );

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ drawerPosition: "left" }}
    >
      <Drawer.Screen
        name="MenuBottom"
        component={MenuBottom}
        options={({ navigation }) => ({
          drawerLabel: "MenuBottom",
          headerRight: () => <BackArrow />,
          headerTitle: "",
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="notifications-outline"
              color={"#535C6C"}
              size={22}
              style={{
                // height: 20,
                // width: 20,
                marginRight: -20,
              }}
            />
          ),
          // drawerItemStyle: { paddingLeft: 60 }, //use This for Icon or image
          drawerLabelStyle: { paddingRight: 20 },
        })}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: "Home" }}
      />

      <Drawer.Screen
        name="Calender"
        component={CalenderScreen}
        options={{ drawerLabel: "Calender" }}
      />
      <Drawer.Screen
        name="SelfCare"
        component={SelfCareScreen}
        options={{ drawerLabel: "SelfCare" }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: "Profile" }}
      />
    </Drawer.Navigator>
  );
}
