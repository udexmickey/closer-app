import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { Navigation } from "../../App/Authentication/Login";
import {
  ViewDiv,
  ImageBackgroundDiv,
  TextDiv,
  ImageDiv,
} from "nativewind.config";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function SplashScreen({ navigation }: { navigation: Navigation }) {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const secondImage = require("../../assets/images/Group1.png");

  return (
    <ViewDiv
      style={{ width: windowWidth, height: windowHeight }}
      className="flex-1 items-center justify-center bg-[#FFF4F7] w-full"
    >
      {/* <ImageBackgroundDiv
        source={require("../../assets/images/Closer BI_handover_Cream logo 2.png")}
        // style={styles.bgImageStyle}
      /> */}

      {isLoading ? (
        <ImageDiv
          source={require("../../assets/images/Closer BI_handover_Cream logo 2.png")}
          accessibilityLabel={`Closer splash banner 1`}
          resizeMethod="resize"
          resizeMode="contain"
          className={`flex items-center justify-center object-contain bg-[#FFF4F7] scale-90`}
        />
      ) : (
        <ViewDiv className="flex items-center justify-end bg-[#FFF4F7] w-full h-full">
          <ViewDiv className="flex items-center justify-between bg-[#FFF4F7] w-full h-[85%]">
            <TextDiv className="text-center text-[#FF4B83] font-bold text-4xl max-w-xs w-full mx-auto">
              Own Your Menstrual Cycle. Plan, Track, Thrive!
            </TextDiv>
            <ImageDiv
              source={secondImage}
              accessibilityLabel={`Closer splash banner 2`}
              resizeMethod="resize"
              resizeMode="cover"
              className={`flex items-center justify-center max-w-md w-full max-h-96 h-full bg-[#FFF4F7]`}
            />
          </ViewDiv>
        </ViewDiv>
      )}
    </ViewDiv>
  );
}
