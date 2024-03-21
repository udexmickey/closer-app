import { CalenderScreen } from "@/Screens/Calender";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ProfileScreen } from "@/Screens/Profile";
import { SelfCareScreen } from "@/Screens/SelfCare";
import { HomeScreen } from "@/Screens/Home";
import { StyleProp, TextStyle } from "react-native";
import { MyDrawer } from "./drawer.menu";

const Tab = createBottomTabNavigator();

export function MenuBottom() {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerShown: true,
      // tabBarActiveTintColor: "#2B0A60",
      // tabBarInactiveTintColor: "#747A8B",
      // }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-tab";
          } else if (route.name === "Calendar") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "SelfCare") {
            iconName = focused ? "person" : "person-outline";
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
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 100,
          // paddingTop: 3,
          paddingBottom: 30,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        },
        tabBarActiveTintColor: "#FF4B83",
        tabBarInactiveTintColor: "#878FA0",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          title: "Home",
          tabBarItemStyle: { paddingTop: 10 }, //use This for Icon or image
          tabBarLabelStyle: { paddingBottom: 10 }, // use This for lable
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              // containerStyle={{ marginTop: 0, marginBottom: 0 }}
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalenderScreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarItemStyle: { paddingTop: 10 }, //use This for Icon or image
          tabBarLabelStyle: { paddingBottom: 10 }, // use This for lable
        }}
      />
      <Tab.Screen
        name="Menu"
        component={SelfCareScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={"#FF4B83"} size={62} />
          ),
        }}
      />
      <Tab.Screen
        name="SelfCare"
        component={SelfCareScreen}
        options={{
          tabBarLabel: "Self Care",
          tabBarItemStyle: { paddingTop: 10 }, //use This for Icon or image
          tabBarLabelStyle: { paddingBottom: 10 }, // use This for lable
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Marketplace",
          tabBarItemStyle: { paddingTop: 10 }, //use This for Icon or image
          tabBarLabelStyle: { paddingBottom: 10 }, // use This for lable
        }}
      />
    </Tab.Navigator>
  );
}
