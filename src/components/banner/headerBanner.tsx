import React, { useEffect } from "react";
import {
  ImageBackgroundDiv,
  ImageDiv,
  TextDiv,
  TouchableOpacityDiv,
  ViewDiv,
} from "nativewind.config";
import { ImageSourcePropType } from "react-native";
import { useSelector } from "react-redux";

type headerBannerType = {
  user: string;
  phase: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
  phaseColor: string;
  onPress?: () => void;
  buttonVisible?: boolean;
};

const HeaderBanner: React.FC<headerBannerType> = ({
  user,
  phase,
  description,
  backgroundImage,
  backgroundColor,
  phaseColor,
  onPress,
  buttonVisible,
}) => {
  const toggleShowCurrentPhaseTitle = useSelector(
    (state: any) => state.toggleShowCurrentPhaseTitle
  );

  const [isShow, setIsShow] = React.useState<boolean>(
    toggleShowCurrentPhaseTitle
  );

  useEffect(() => {
    setIsShow(toggleShowCurrentPhaseTitle.isShow);
    console.log("PhaseTitle", toggleShowCurrentPhaseTitle.isShow);
  }, [toggleShowCurrentPhaseTitle.isShow]);

  return (
    <ViewDiv className="w-full">
      <ViewDiv
        style={{
          backgroundColor: backgroundColor ?? "#FFF7FA",
        }}
      >
        <ViewDiv className="flex flex-col max-w-md w-full gap-y-24">
          <ImageBackgroundDiv
            resizeMethod="resize"
            resizeMode="cover"
            source={backgroundImage as ImageSourcePropType}
            className={`w-full h-72 bg-["#FFF7FA"] gap-y-4 items-center justify-start`}
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            <ViewDiv
              style={{ paddingLeft: 20 }}
              className="flex flex-col max-w-md w-full gap-y-4 items-start justify-start"
            >
              <TextDiv className="capitalize text-[#62565A] text-base max-w-md w-full font-medium">
                Hello {user ?? "Adenike"},{" "}
              </TextDiv>
              <ViewDiv className="text-lg max-w-md w-full flex-col mb-2">
                <TextDiv className="text-[#000000] text-3xl font-semibold max-w-full w-[65%]">
                  You’re in your
                </TextDiv>
                {isShow ? (
                  <TextDiv
                    className={`capitalize text-[${
                      phaseColor ?? "#FF4B83"
                    }] text-3xl font-semibold max-w-full w-[75%]`}
                    style={{
                      color: phaseColor || "#FF4B83",
                    }}
                  >
                    {phase + " Phase. " ?? "Ovulatory Phase."}
                  </TextDiv>
                ) : null}
                <TextDiv className="capitalize text-[#62565A] text-sm max-w-md w-[65%] mt-2">
                  {description ?? "Connect, Harness Your Social Superpowers 🚀"}
                </TextDiv>
              </ViewDiv>

              {buttonVisible && (
                <TouchableOpacityDiv
                  className="justify-center items-center text-white rounded-full py-3 px-4 bg-[#FF4B83] max-w-max"
                  onPress={onPress}
                >
                  <TextDiv className="text-white text-sm font-semibold">
                    Monitor Wellness
                  </TextDiv>
                </TouchableOpacityDiv>
              )}
            </ViewDiv>
          </ImageBackgroundDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default HeaderBanner;
