import { View, Text, Pressable } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { ButtonDiv, TouchableOpacityDiv, ViewDiv } from "nativewind.config";

const Celebration = () => {
  const celebrationRef = React.useRef<LottieView>(null);

  const handleCelebrationTrigger = () => {
    console.log("celebration clicked");
    if (celebrationRef?.current) {
      celebrationRef?.current?.play(0);
      console.log("2 celebration clicked 2");
    }
  };

  return (
    <ViewDiv className="absolute inset-0 z-20">
      <TouchableOpacityDiv
        onPress={handleCelebrationTrigger}
        className="absolute inset-0 bg-slate-200 p-4 rounded-lg"
      >
        <Text>celebration</Text>
      </TouchableOpacityDiv>
      <LottieView
        ref={celebrationRef}
        source={require("../../assets/animations/celebration.json")}
        loop
        // resizeMode="cover"
        style={{
          width: "100%",
          // height: 500,
          alignSelf: "center",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 600,
        }}
      />
    </ViewDiv>
  );
};

export default Celebration;
