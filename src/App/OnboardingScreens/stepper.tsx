import { ViewDiv } from "nativewind.config";
import React from "react";

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
  return (
    <ViewDiv style={{ flexDirection: "row" }}>
      {[...Array(totalSteps)].map((_, index) => (
        <ViewDiv
          key={index}
          style={{
            width: index === currentStep ? 20 : 40,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              index === currentStep ? "white" : "rgba(255, 255, 255, 0.5)",
            margin: 5,
          }}
        />
      ))}
    </ViewDiv>
  );
};

export default Stepper;
