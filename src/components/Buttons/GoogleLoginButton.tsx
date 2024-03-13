import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SvgUri from "react-native-svg-uri";
import Icon from "react-native-vector-icons/MaterialIcons";

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic here
  };

  return (
    <TouchableOpacity onPress={handleGoogleLogin}>
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
        <AntDesign
          name="google"
          size={24}
          color="#4285F4"
          style={{ marginRight: 8 }}
        />

        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
          Log in with Google
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleLoginButton;
