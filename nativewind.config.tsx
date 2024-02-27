// React-native doesn't support classNames as props but i will be using tailwind css for my styling
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList, // Adding FlatList
  SectionList, // Adding SectionList
  Modal, // Adding Modal
  ActivityIndicator, // Adding ActivityIndicator
  Switch, // Adding Switch
  VirtualizedList, // Adding VirtualizedList
} from "react-native";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

// For my SafeAreaView component, i will be getting it from "react-native-safe-area-context" this helps provides more options for my styles and componets useage
export const SafeAreaViewDiv = styled(SafeAreaView);

// This file is a custom file i used to rename the components from reactNative. This helps wrap my reactnative component with react-wind styles guard, which helps to pass className as props to my components....
export const ViewDiv = styled(View);

export const ScrollViewDiv = styled(ScrollView);
export const TextDiv = styled(Text);
export const ImageDiv = styled(Image);
export const ImageBackgroundDiv = styled(ImageBackground);
export const ButtonDiv = styled(Button);
export const TouchableOpacityDiv = styled(TouchableOpacity);
export const TextInputDiv = styled(TextInput);
export const FlatListDiv = styled(FlatList); // Adding FlatList
export const SectionListDiv = styled(SectionList); // Adding SectionList
export const ModalDiv = styled(Modal); // Adding Modal
export const ActivityIndicatorDiv = styled(ActivityIndicator);
export const SwitchDiv = styled(Switch);
export const VirtualizedListDiv = styled(VirtualizedList);

// // Styled components for additional components
// export const PickerDiv = styled(Picker);
// export const SliderDiv = styled(Slider);
