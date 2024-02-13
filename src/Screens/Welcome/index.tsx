import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Welcome({ name, image }: { name: string; image: any }) {
  return (
    <SafeAreaView>
      <Image
        source={image}
        style={style.image}
        accessibilityLabel={`${name} closer`}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  //   card: {
  //     flex: 1,
  //     backgroundColor: "white",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },

  image: {
    aspectRatio: 1,
    width: windowWidth * 0.9,
    height: windowHeight * 0.9,
    // marginVertical: 24,
  },
});
