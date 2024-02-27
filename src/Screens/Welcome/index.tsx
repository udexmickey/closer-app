import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Navigation } from "../../App/Authentication/Login";
import {
  SafeAreaViewDiv,
  ViewDiv,
  ImageBackgroundDiv,
  ButtonDiv,
} from "nativewind.config";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function WelcomeScreen({ navigation }: { navigation: Navigation }) {
  return (
    <SafeAreaViewDiv style={style.card}>
      <ImageBackgroundDiv
        source={require("../../assets/images/closer-image.png")}
        // style={styles.bgImageStyle}
        accessibilityLabel={`Closer welcome banner`}
        resizeMethod="resize"
        resizeMode="cover"
        className={`max-h-screen h-full max-w-screen w-full flex flex-1 items-center justify-center object-cover`}
      >
        <SafeAreaViewDiv
          className={`max-h-screen h-[95%] max-w-[${
            windowWidth * 0.9
          }px] w-full flex items-stretch justify-end`}
        >
          <ViewDiv className="flex items-center justify-center gap-y-20">
            <ButtonDiv
              title="Go to Details"
              onPress={() => navigation.navigate("Details")}
            />
          </ViewDiv>
        </SafeAreaViewDiv>
      </ImageBackgroundDiv>
    </SafeAreaViewDiv>
  );
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
