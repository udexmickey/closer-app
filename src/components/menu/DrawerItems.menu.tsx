import React, { ReactNode } from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { ViewDiv } from "nativewind.config";

interface DrawerItemsProps {
  icon: ReactNode;
  label: string;
  navigateTo: string;
}

const navListFirstStep = [
  {
    id: 1,
    label: "Search",
    icon: <Feather name="search" size={18} color="#535C6C" />,
    navigateTo: "Search",
  },
  {
    id: 2,
    label: "Home",
    icon: <Feather name="home" size={18} color="#535C6C" />,
    navigateTo: "Home",
  },
  {
    id: 3,
    label: "Calendar",
    icon: <Ionicons name="calendar-outline" size={18} color="#535C6C" />,
    navigateTo: "Calendar",
  },
  {
    id: 4,
    label: "Self Care",
    icon: <MaterialIcons name="self-improvement" size={18} color="#535C6C" />,
    navigateTo: "SelfCare",
  },
];

const navListSecondStep = [
  {
    id: 1,
    label: "Tasks",
    icon: <FontAwesome5 name="tasks" size={18} color="#535C6C" />,
    navigateTo: "Tasks",
  },
  {
    id: 2,
    label: "MarketPlace",
    icon: <Ionicons name="stats-chart-outline" size={18} color="#535C6C" />,
    navigateTo: "MarketPlace",
  },
  {
    id: 3,
    label: "Notification",
    icon: <Ionicons name="notifications-outline" size={18} color="#535C6C" />,
    navigateTo: "Notifications",
  },
];

const DrawerItemsMenu: React.FC<DrawerItemsProps> = ({
  icon,
  label,
  navigateTo,
}) => {
  const navigation = useNavigation();

  return (
    <DrawerItem
      onPress={() => {
        navigation.navigate(navigateTo as unknown as never);
      }}
      icon={() => icon}
      label={label}
      activeTintColor={"#FF4B83"}
      activeBackgroundColor={"#000"}
      labelStyle={{
        color: "#535C6C",
        fontSize: 14,
        fontWeight: "400",
        width: "100%",
        textAlign: "left",
        maxWidth: 250,
        marginHorizontal: -20,
      }}
      style={{
        flex: 1,
        justifyContent: "center",
        marginHorizontal: -5,
        maxWidth: 250,
        width: "100%",
      }}
    />
  );
};

const DrawerItemsList = () => {
  return (
    <ViewDiv
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {navListFirstStep.map((item) => (
        <DrawerItemsMenu
          key={item.id}
          icon={item.icon}
          label={item.label}
          navigateTo={item.navigateTo}
        />
      ))}
      <ViewDiv className="w-full mx-auto h-px bg-[#E6E8F0] my-6" />
      {navListSecondStep.map((item) => (
        <DrawerItemsMenu
          key={item.id}
          icon={item.icon}
          label={item.label}
          navigateTo={item.navigateTo}
        />
      ))}
    </ViewDiv>
  );
};

export default DrawerItemsList;
