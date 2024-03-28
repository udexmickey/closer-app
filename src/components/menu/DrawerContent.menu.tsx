import React from "react";
import {
  ViewDiv,
  TouchableOpacityDiv,
  TextDiv,
  ImageDiv,
} from "nativewind.config";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import DrawerItemsList from "./DrawerItems.menu";
import { useAuth } from "@/context/authContext";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DrawerContentMenu = (
  props: React.JSX.IntrinsicAttributes & DrawerContentComponentProps
) => {
  const { authContext } = useAuth();
  const navigation = useNavigation();
  return (
    <ViewDiv className="flex-1 flex-col justify-center relative">
      <DrawerContentScrollView {...props}>
        {/* <TextDiv className="absolute top-10 right-5">X</TextDiv> */}
        <ViewDiv style={styles.drawerContent}>
          <TouchableOpacityDiv
            onPress={() =>
              navigation.navigate("PersonalInformation" as unknown as never)
            }
            className="flex items-center flex-row justify-between p-x-2  w-full overflow-hidden gap-x-2"
            activeOpacity={0.8}
          >
            <ImageDiv
              style={{
                width: 80,
                height: 80,
                borderRadius: 999,
                backgroundColor: "#535C6C",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/7165/7eeb/df476c83066f9fddf9706196aabc92d0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHAISB8MUd5z46v-2D6dPVnmS-CwBhrMTcKcVVoDL~fsfc0NwaIe7elBBkmlHICxYwXgYY2jB0sbmzSH8~Pdx8ziygLZlA6nA08lgte9ni98Tb1EkPvtDYY0g51BG~g3vl1UlModBEW31M49WlzHsUnlHUVnkYPSBzvEr1bDEgltzudZBKeRxcoLYpqolXzzdNqtVTEdPR3SFj7ZaRjyf~aXP7AP7O-RGAW-Yg9ME6D3OTyGdNeKlOWv5Tvtn93Cw8K5tRjg8EpE7wiRj8stEe04ZPq8gDW8~31Uu81oaj1s6hmhcm-fB-nZsaqnjY4GSjPoBEJmsTjNfQCenBVkoQ__",
              }}
            />
            {/* the dont want this section out of it direct parent with background color of yellow */}
            <ViewDiv>
              <TextDiv className="font-semibold text-[#000000] text-lg w-full ">
                Adenike Johnson
              </TextDiv>
              <TextDiv className="text-xs text-[#535C6C] font-normal">
                adenikejohn@gmail.com
              </TextDiv>
            </ViewDiv>
          </TouchableOpacityDiv>
          <ViewDiv className="w-full h-px bg-[#E6E8F0] my-6" />
          <DrawerItemsList />
        </ViewDiv>
        <ViewDiv className=" px-6">
          <ViewDiv className="w-full mx-auto h-px bg-[#E6E8F0] my-6" />
          <TouchableOpacityDiv
            onPress={() => authContext.signOut()}
            className="flex items-center justify-start gap-3 flex-row mr-auto"
          >
            <SimpleLineIcons name="logout" size={18} color="#FF4B83" />
            <TextDiv className="text-lg text-[#FF4B83] font-medium">
              Logout
            </TextDiv>
          </TouchableOpacityDiv>
        </ViewDiv>
      </DrawerContentScrollView>
    </ViewDiv>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginTop: 15,
    width: "100%",
  },
});
export default DrawerContentMenu;
