import { WelcomeScreen } from "@/Screens/Welcome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CalenderScreen } from "@/Screens/Calender";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProfileScreen } from "@/Screens/Profile";
import { RingScreen } from "@/Screens/Ring";
import { HomeScreen } from "@/Screens/Home";
import { StyleProp, TextStyle } from "react-native";

const Tab = createBottomTabNavigator();

export function MenuBottom() {
  return (
    <Tab.Navigator
      //   screenOptions={{
      //     headerShown: true,
      //   tabBarActiveTintColor: "#2B0A60",
      //   tabBarInactiveTintColor: "#747A8B",
      //   }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Calendar") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Ring") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          // You can define your custom style for focused icon here
          const iconStyle = focused ? { fontWeight: "bold", fontSize: 32 } : {};

          return (
            <Ionicons
              name={iconName as any}
              size={size}
              color={color}
              style={iconStyle as StyleProp<TextStyle>}
            />
          );
        },
        tabBarActiveTintColor: "#2B0A60",
        tabBarInactiveTintColor: "#747A8B",
      })}
    >
      {/* <Tab.Screen name="Welcome" component={WelcomeScreen} /> */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          //   tabBarIcon: ({ color, size }) => (
          //     <Ionicons name="home" color={color} size={size} />
          //   ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalenderScreen}
        options={{
          tabBarLabel: "Calendar",
        }}
      />
      <Tab.Screen
        name="Ring"
        component={RingScreen}
        options={{
          tabBarLabel: "Ring",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}
