import { View, Text } from "react-native";
import React from "react";
import {
  ImageDiv,
  TextDiv,
  TouchableOpacityDiv,
  ViewDiv,
} from "nativewind.config";
import { StackNavigationProp } from "@react-navigation/stack";

const ProfileAvatar: React.FC<any> = ({ navigation }) => {
  return (
    <TouchableOpacityDiv
      onPress={() => navigation.navigate("PersonalInformation")}
      className="flex items-center gap-2 flex-row"
    >
      <ImageDiv
        className="w-20 h-20 rounded-full bg-slate-100"
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/7165/7eeb/df476c83066f9fddf9706196aabc92d0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHAISB8MUd5z46v-2D6dPVnmS-CwBhrMTcKcVVoDL~fsfc0NwaIe7elBBkmlHICxYwXgYY2jB0sbmzSH8~Pdx8ziygLZlA6nA08lgte9ni98Tb1EkPvtDYY0g51BG~g3vl1UlModBEW31M49WlzHsUnlHUVnkYPSBzvEr1bDEgltzudZBKeRxcoLYpqolXzzdNqtVTEdPR3SFj7ZaRjyf~aXP7AP7O-RGAW-Yg9ME6D3OTyGdNeKlOWv5Tvtn93Cw8K5tRjg8EpE7wiRj8stEe04ZPq8gDW8~31Uu81oaj1s6hmhcm-fB-nZsaqnjY4GSjPoBEJmsTjNfQCenBVkoQ__",
        }}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <ViewDiv>
        <TextDiv className="font-semibold text-[#000000] text-base">
          Adenike Johnson
        </TextDiv>
        <TextDiv className="text-sm text-[#535C6C] font-normal">
          adenikejohn@gmail.com
        </TextDiv>
      </ViewDiv>
    </TouchableOpacityDiv>
  );
};

export default ProfileAvatar;
