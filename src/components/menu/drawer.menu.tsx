import { createDrawerNavigator } from "@react-navigation/drawer";
import CalendarScreen from "@/Screens/Calender";
import SelfCareScreen from "@/Screens/SelfCare";
import { ProfileScreen } from "@/Screens/Profile";
import HomeScreen from "@/Screens/Home";
import MenuBottom from "./Bottom.menu";
import { Ionicons, Feather } from "@expo/vector-icons";
import { TouchableOpacityDiv, ViewDiv } from "nativewind.config";
import React from "react";
import { UserPhaseState } from "@/redux/action/userPhaseAction";
import { connect } from "react-redux";
import { RootState } from "@/redux/reducer";
import { LogoutScreen } from "@/Screens/Logout";

const Drawer = createDrawerNavigator();

interface MyDrawerProps {
  userPhase: UserPhaseState; // Update the type to UserPhaseState
}

// export function MyDrawer<MyDrawerProps>({ userPhase }) {

const MyDrawer: React.FC<MyDrawerProps> = ({ userPhase }) => {
  const safeAreaBackgroundColor =
    userPhase.userPhase === "ovulatory"
      ? "#FF4B83"
      : userPhase.userPhase === "luteal"
      ? "#FD7900"
      : userPhase.userPhase === "follicular"
      ? "#0F9B3F"
      : userPhase.userPhase === "period"
      ? "#006FFD"
      : "#red";

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
      initialRouteName="MenuBottom"
      screenOptions={{
        drawerPosition: "left",
        // drawerStyle: { backgroundColor: safeAreaBackgroundColor },
      }}
    >
      <Drawer.Screen
        name="MenuBottom"
        component={MenuBottom}
        options={({ navigation }) => ({
          // drawerStyle: { backgroundColor: safeAreaBackgroundColor },
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
          drawerLabelStyle: {
            paddingRight: 20,
          },
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: "Profile" }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: "Home" }}
      />

      <Drawer.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ drawerLabel: "Calendar" }}
      />
      <Drawer.Screen
        name="SelfCare"
        component={SelfCareScreen}
        options={{ drawerLabel: "SelfCare" }}
      />
      <Drawer.Screen
        name="LogOut"
        component={LogoutScreen}
        options={{ drawerLabel: "LogOut" }}
      />
    </Drawer.Navigator>
  );
};

// Map Redux state to component props
const mapStateToProps = (state: RootState) => ({
  userPhase: state.userPhase, // Access the user phase from the root state
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(MyDrawer);
