import { SplashScreen } from "@/Screens/Welcome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CalenderScreen } from "@/Screens/Calender";
import { RingScreen } from "@/Screens/Ring";
import { ProfileScreen } from "@/Screens/Profile";
import { HomeScreen } from "@/Screens/Home";

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ drawerPosition: "right" }}
    >
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
        name="Ring"
        component={RingScreen}
        options={{ drawerLabel: "Ring" }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: "Profile" }}
      />
      <Drawer.Screen
        name="Welcome"
        component={SplashScreen}
        options={{ drawerLabel: "Welcome" }}
      />
    </Drawer.Navigator>
  );
}
