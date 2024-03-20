import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SvgUri from "react-native-svg-uri";
import Icon from "react-native-vector-icons/MaterialIcons";

const AppleLoginButton = () => {
  const handleAppleLogin = () => {
    // Implement Apple login logic here
  };

  return (
    <TouchableOpacity onPress={handleAppleLogin}>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#E9EDF2", // border color
        }}
      >
        <AntDesign name="apple1" size={24} color="black" />
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
          {` `} Continue with Apple ID
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppleLoginButton;
