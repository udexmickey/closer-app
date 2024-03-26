import { View, Button, Text } from "react-native";
import { Navigation } from "../../App/Authentication/Login";
import {
  ViewDiv,
  ScrollViewDiv,
  TextDiv,
  TouchableOpacityDiv,
} from "nativewind.config";
import { connect } from "react-redux";
import { RootState } from "@/redux/reducer";
import { UserPhaseState } from "@/redux/action/userPhaseAction";
import SelfCareBanner from "@/components/banner/SelfCareBanner";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import CareTips from "@/components/card/CareTips";
import HealthTips from "@/components/card/HealthTips";

// Define component props
interface SelfCareProps {
  navigation: Navigation;
  userPhase: UserPhaseState; // Update the type to UserPhaseState
}

const SelfCareScreen: React.FC<SelfCareProps> = ({ navigation, userPhase }) => {
  const AddSymptom = () => {
    navigation.navigate("AddSymptom");
  };

  const ExpandSymptom = () => {
    console.log("Expand Symptoms");
  };

  return (
    <ViewDiv className="flex-1 bg-white pb-2">
      <ScrollViewDiv className="flex-1 bg-white gap-y-4 mt-0">
        {/* // SelfCare header Banner for user phase component */}
        <SelfCareBanner
          user={"Adenike"}
          phase={"Transform Your Cycle"}
          description={"Turn symptoms into steps for wellness."}
          // backgroundImage={""}
          // backgroundColor={"#FFF7F1"}
          // phaseColor={""}
          userPhase={userPhase}
        />

        {/* // Symptom card component */}
        <ViewDiv
          className="shadow-md bg-white w-full max-w-sm rounded-2xl mx-auto border-[#E9EDF2]"
          style={{ borderWidth: 1.5 }}
        >
          <ViewDiv className="flex flex-col w-full py-4 mx-auto justify-center gap-y-4 px-6">
            <ViewDiv className="flex flex-row w-full justify-between items-center ">
              <ViewDiv>
                <TextDiv className="text-base font-semibold text-[#FF4B83]">
                  Symptoms
                </TextDiv>
              </ViewDiv>

              <TouchableOpacityDiv
                className="w-max justify-center items-center  rounded-full py-2 px-3"
                onPress={AddSymptom}
              >
                <TextDiv className="text-[#FF4B83] text-sm font-semibold">
                  Add Symptom
                </TextDiv>
              </TouchableOpacityDiv>
            </ViewDiv>

            <TextDiv className="text-center mx-auto">
              The symptoms item lists will be here
            </TextDiv>
            <TouchableOpacityDiv
              className="w-max justify-center items-center bg-[#FF4B83] text-white rounded-full py-3 px-6 mb-4"
              onPress={ExpandSymptom}
            >
              <TextDiv className="text-white text-sm font-semibold">
                Expand <AntDesign name="down" color="white" />{" "}
              </TextDiv>
            </TouchableOpacityDiv>

            {/* <hr className="my-3" /> */}
            <ViewDiv className="border-separate border-b-2 border-[#E9EDF2]  m-y-4" />

            {/* CareTips component */}
            <CareTips />
          </ViewDiv>
        </ViewDiv>

        <ViewDiv className="bg-white w-full max-w-sm mx-auto">
          <HealthTips />
        </ViewDiv>
      </ScrollViewDiv>
    </ViewDiv>
  );
};

// Map Redux state to component props
const mapStateToProps = (state: RootState) => ({
  userPhase: state.userPhase, // Access the user phase from the root state
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(SelfCareScreen);
