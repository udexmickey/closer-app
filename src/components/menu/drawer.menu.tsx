import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import CalendarScreen from "@/Screens/Calender";
import SelfCareScreen from "@/Screens/SelfCare";
import ProfileScreen from "@/Screens/Profile";
import HomeScreen from "@/Screens/Home";
import MenuBottom from "./Bottom.menu";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { TouchableOpacityDiv, ViewDiv } from "nativewind.config";
import React from "react";
import { UserPhaseState } from "@/redux/action/userPhaseAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducer";
import { LogoutScreen } from "@/Screens/Logout";
import { toggleNotifications } from "@/redux/action/activateNotificationsActions";
import { toggleShowPhase } from "@/redux/action/toggleShowCurrentUserPhaseActions";
import DrawerContentMenu from "./DrawerContent.menu";
import { useRoute } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

interface MyDrawerProps {
  userPhase: UserPhaseState; // Update the type to UserPhaseState
}

const MyDrawer: React.FC<MyDrawerProps> = ({ userPhase }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const safeAreaBackgroundColor =
    userPhase.userPhase === "ovulatory"
      ? "#FFF7FA"
      : userPhase.userPhase === "luteal"
      ? "#FFF7F1"
      : userPhase.userPhase === "follicular"
      ? "#F7FCF7"
      : userPhase.userPhase === "period"
      ? "#E1F1FF"
      : "#FFF7FA";

  const notifications = useSelector((state: any) => state.notifications);
  const dispatch = useDispatch();

  const handleToggleNotifications = (isEnabled: boolean) => {
    dispatch(toggleNotifications(isEnabled));
  };

  const toggleShowCurrentPhaseTitle = useSelector(
    (state: any) => state.toggleShowCurrentPhaseTitle
  );

  const handleToggleToggleShowCurrentPhaseTitle = (isShow: boolean) => {
    dispatch(toggleShowPhase(!isShow));
    console.log("toggleShowCurrentPhaseTitle", toggleShowCurrentPhaseTitle);
  };

  const MenuArrow = () => {
    return (
      <ViewDiv className="flex items-center justify-center text-center flex-row gap-x-4 pl-4 h-12">
        <Entypo
          name="menu"
          size={24}
          color="black"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </ViewDiv>
    );
  };

  const BackArrow = () => (
    <ViewDiv className="flex items-center justify-center text-center flex-row gap-x-4 pr-6 w-32 h-12">
      <TouchableOpacityDiv
        onPress={() => handleToggleNotifications(!notifications.isEnabled)}
        className="flex items-center justify-center"
      >
        {notifications.isEnabled ? (
          <Ionicons name="notifications-outline" size={22} />
        ) : (
          <Ionicons name="notifications-off-outline" size={22} />
        )}
      </TouchableOpacityDiv>
      <TouchableOpacityDiv
        onPress={() =>
          handleToggleToggleShowCurrentPhaseTitle(
            toggleShowCurrentPhaseTitle.isShow
          )
        }
        className="flex items-center justify-center"
      >
        {toggleShowCurrentPhaseTitle.isShow ? (
          <Feather name="eye-off" size={22} color="black" />
        ) : (
          <Feather name="eye" size={22} color="black" />
        )}
      </TouchableOpacityDiv>
    </ViewDiv>
  );

  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            route.name === "Home" ? safeAreaBackgroundColor : "#FFFFFF",
        },
        headerTintColor: "#121212",
        drawerPosition: "left",
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContentMenu {...props} />}
    >
      <Drawer.Screen
        name="Profile"
        component={MenuBottom}
        options={({ navigation }) => ({
          drawerLabel: "Profile",
          headerRight: () => <BackArrow />,
          headerLeft: () => <MenuArrow />,
          headerTitle: "",
          headerShown: true,
          headerTitleAlign: "center",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="notifications-outline"
              color={"#535C6C"}
              size={22}
              // style={{
              // marginRight: -20,
              // }}
            />
          ),
          // drawerLabelStyle: {
          //   paddingRight: 20,
          // },
        })}
      />
      {/* <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: "Profile" }}
      /> */}
      {/* <Drawer.Screen
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
      /> */}
    </Drawer.Navigator>
  );
};

// Map Redux state to component props
const mapStateToProps = (state: any) => ({
  userPhase: state.userPhase,
  editProfile: state.editProfile,
  notifications: state.notifications,
  currentUser: state.currentUser,
  toggleShowCurrentPhaseTitle: state.toggleShowCurrentPhaseTitle,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(MyDrawer);
