import { TextDiv, ViewDiv } from "nativewind.config";
import React from "react";
import { useWindowDimensions, Animated } from "react-native";

interface StepperProps {
  // currentStep: number;
  // totalSteps: number;
  data: Record<string, any>[];
  scrollX: any;
}

const Stepper: React.FC<StepperProps> = ({
  // currentStep,
  // totalSteps,
  data,
  scrollX,
}) => {
  const { width } = useWindowDimensions();
  return (
    // <ViewDiv style={{ flexDirection: "row", height: 64 }}>
    //   {[...Array(totalSteps)].map((_, index) => (
    //     <ViewDiv
    //       key={index}
    //       style={{
    //         width: index === currentStep ? 20 : 40,
    //         height: 10,
    //         borderRadius: 10,
    //         backgroundColor: index === currentStep ? "#FF4B83" : "#F0F0F0",
    //         margin: 5,
    //       }}
    //     />
    //   ))}
    // </ViewDiv>

    <ViewDiv style={{ flexDirection: "row", height: 64 }}>
      {data?.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [40, 20, 40],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#F0F0F0", "#FF4B83", "#F0F0F0"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={index.toString()}
            style={{
              width: dotWidth,
              height: 10,
              borderRadius: 10,
              backgroundColor: backgroundColor,
              margin: 5,
            }}
          />
        );
      })}
    </ViewDiv>
  );
};

export default Stepper;
