import { Navigation } from "../../App/Authentication/Login";
import {
  FlatListDiv,
  SafeAreaViewDiv,
  TextDiv,
  TouchableOpacityDiv,
  ViewDiv,
} from "nativewind.config";
import ProfileAvatar from "./components/profile.avatar";
import ProfileNavigatorMenu, {
  ProfileNavigatorMenuProps,
} from "./components/profile.navigator";
import {
  Feather,
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { useState } from "react";
import { FlatList } from "react-native";
import { useAuth } from "@/context/authContext";
import { connect, useDispatch, useSelector } from "react-redux";
import { toggleNotifications } from "@/redux/action/activateNotificationsActions";

const ProfileScreen = ({ navigation }: { navigation: Navigation }) => {
  const handlePress = (title: string) => {
    // navigation.navigate("Settings");
    switch (title) {
      case "Personal Information":
        navigation.navigate("PersonalInformation");
        break;
      case "Change Password":
        navigation.navigate("ChangePassword");
        break;
      default:
        break;
    }
  };

  const { authContext } = useAuth();

  const handleLogout = () => {
    authContext.signOut();
  };

  const notifications = useSelector((state: any) => state.notifications);
  const dispatch = useDispatch();

  const toggleNotificationsHandler = (isEnabled: boolean) => {
    dispatch(toggleNotifications(isEnabled));
  };

  const profileNavigatorLists = [
    {
      id: 1,
      title: "Personal Information",
      rightIcon: (
        <FontAwesome6 name="arrow-right-long" size={14} color="#878FA0" />
      ),
      leftIcon: <FontAwesome5 name="user" size={14} color="#878FA0" />,
    },

    {
      id: 2,
      title: "Change Password",
      rightIcon: (
        <FontAwesome6 name="arrow-right-long" size={14} color="#878FA0" />
      ),
      leftIcon: <Feather name="lock" size={14} color="#878FA0" />,
    },
  ];

  const renderProfileNavigatorItem = ({
    item,
    index,
  }: {
    item: ProfileNavigatorMenuProps;
    index: number;
  }) => (
    <ProfileNavigatorMenu
      key={index + 1}
      title={item.title}
      leftIcon={item.leftIcon}
      rightIcon={item.rightIcon}
      handlePress={() => handlePress(item.title)}
    />
  );

  return (
    <SafeAreaViewDiv className="flex-1 justify-start items-left bg-white px-4">
      <ProfileAvatar navigation={navigation} />

      <ViewDiv className="w-full h-px bg-gray-200 justify-center items-center flex my-4" />
      <ViewDiv className="mt-8">
        <FlatList
          data={profileNavigatorLists}
          renderItem={renderProfileNavigatorItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <ViewDiv style={{ height: 20 }} />}
        />

        {/* Notifications section */}
        <ViewDiv className="flex flex-row justify-between items-center p-4 rounded-lg mt-6 bg-[#FEF9F0]">
          <ViewDiv className="flex flex-row justify-between items-center gap-x-3">
            <ViewDiv className="font-medium text-[#3A3C42] text-sm">
              <Ionicons
                name="notifications-outline"
                size={14}
                color="#878FA0"
              />
            </ViewDiv>
            <TextDiv className="font-medium text-[#535C6C] text-sm">
              Notifications
            </TextDiv>
          </ViewDiv>
          <TouchableOpacityDiv
            className="font-medium text-[#878FA0] text-sm"
            onPress={() => toggleNotificationsHandler(!notifications.isEnabled)}
          >
            {notifications.isEnabled ? (
              <FontAwesome name="toggle-on" size={20} color="#0F9B3F" />
            ) : (
              <FontAwesome name="toggle-off" size={20} color="#878FA0" />
            )}
          </TouchableOpacityDiv>
        </ViewDiv>

        {/* logout section */}
        <TouchableOpacityDiv
          className="flex flex-row justify-between items-center p-4 rounded-lg mt-6 bg-[#FEF9F0]"
          onPress={handleLogout}
        >
          <ViewDiv className="flex flex-row justify-between items-center gap-x-3">
            <TouchableOpacityDiv className="font-medium text-[#3A3C42] text-sm">
              <MaterialIcons name="logout" size={14} color="#878FA0" />
            </TouchableOpacityDiv>
            <TextDiv className="font-medium text-[#535C6C] text-sm">
              Logout
            </TextDiv>
          </ViewDiv>
        </TouchableOpacityDiv>
      </ViewDiv>
    </SafeAreaViewDiv>
  );
};

// Map Redux state to component props
const mapStateToProps = (state: any) => ({
  notifications: state.notifications,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(ProfileScreen);
