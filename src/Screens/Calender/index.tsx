import { Navigation } from "../../App/Authentication/Login";
import { ViewDiv, ScrollViewDiv, TextDiv } from "nativewind.config";
import { connect } from "react-redux";
import { RootState } from "@/redux/reducer";
import { UserPhaseState } from "@/redux/action/userPhaseAction";
import CalendarBanner from "@/components/banner/CalendarBanner";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import CareTips from "@/components/card/CareTips";
import PhaseToolTips from "@/components/Tooltips/phase.tooltip";
import MyCalendar from "@/components/calendar/myCarlendar";
import { Alert } from "react-native";
import PhaseBanner from "../../components/banner/PhaseBanner";

// Define component props
interface CalendarProps {
  navigation: Navigation;
  userPhase: UserPhaseState; // Update the type to UserPhaseState
}

const CalendarScreen: React.FC<CalendarProps> = ({ navigation, userPhase }) => {
  // Define component props
  const phaseRowArray = [
    {
      id: "1",
      phase: "Period",
      iconColor: "#FFEEF4",
    },
    {
      id: "2",
      phase: "Follicular",
      iconColor: "#DBEDE1",
    },
    {
      id: "3",
      phase: "Ovulatory",
      iconColor: "#E1F1FF",
    },
    {
      id: "4",
      phase: "Luteal",
      iconColor: "#FFF1E4",
    },
  ];

  const handleMonitorWellness = () => {
    Alert.alert("Monitor Wellnes", "Monitor Wellnes");
  };
  return (
    <ViewDiv className="flex-1 bg-white pb-2">
      <ScrollViewDiv className="flex-1 bg-white gap-y-4 mt-0">
        {/* // Calendar header Banner for user phase component from PhaseBanner.... this comes with a button to monitor wellness */}
        <PhaseBanner userPhase={userPhase.userPhase} buttonVisible={true} />

        {/* // PhaseToolTips component */}
        <ViewDiv className="flex flex-row gap-x-2 justify-evenly items-center wrapper flex-wrap">
          {phaseRowArray.map((phase) => (
            <PhaseToolTips
              key={phase.id}
              lable={phase.phase}
              subTitle={"This phase is when you are on your period."}
              iconColor={phase.iconColor}
              IconSize={12}
            />
          ))}
        </ViewDiv>

        {/* Calendar Component section */}
        <ViewDiv className="flex flex-row gap-x-2 justify-center items-center wrapper flex-wrap py-4 px-4">
          <MyCalendar />
        </ViewDiv>

        {/* CareTips component */}
        <ViewDiv
          className="shadow-md bg-white w-full max-w-sm rounded-2xl mx-auto border-[#E9EDF2]"
          style={{ borderWidth: 1.5 }}
        >
          <ViewDiv className="flex flex-col w-full py-4 mx-auto justify-center gap-y-4 px-6">
            <CareTips />
          </ViewDiv>
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
export default connect(mapStateToProps)(CalendarScreen);
