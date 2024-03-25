import { connect } from "react-redux";
import { useState } from "react";
import { ScrollViewDiv, TextDiv, ViewDiv } from "nativewind.config";
import { Navigation } from "../../App/Authentication/Login";
import OvulationNotifier from "@/components/Notifications/OvulationNotifier";
import TaskCard, { TaskItem } from "@/components/card/tasks.card";
import sampleTasks from "./seed.data";
import LogPeriodIndicator from "@/components/indicator/log.period.indicator";
import { RootState } from "@/redux/reducer";
import { UserPhaseState } from "@/redux/action/userPhaseAction";
import PhaseBanner from "../../components/banner/PhaseBanner";

// Define component props
interface HomeScreenProps {
  navigation: Navigation;
  userPhase: UserPhaseState; // Update the type to UserPhaseState
}

// Define HomeScreen component
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, userPhase }) => {
  // State to manage tasks
  const [tasks, setTasks] = useState<TaskItem[]>(sampleTasks);

  // Function to Plan more tasks
  const planTask = () => {
    // Implement your logic to Plan more tasks here
    console.log(`Plan more tasks...`);
  };

  return (
    <ViewDiv className="flex-1 bg-white pb-2">
      <ScrollViewDiv className="flex-1 bg-white gap-y-4 mt-0">
        {/* // Header banner for user phase component */}
        <PhaseBanner userPhase={userPhase.userPhase} buttonVisible={false} />

        {/* //Date picker for active period/ovulation phase */}
        <ViewDiv className="flex flex-row w-full p-4 mx-auto justify-center">
          <LogPeriodIndicator userPhase={userPhase.userPhase} />
        </ViewDiv>

        {/* Ovalution notifier component */}
        <ViewDiv>
          <OvulationNotifier
            userPhase={userPhase.userPhase}
            days={4}
            date={20}
            month={"April"}
          />
        </ViewDiv>

        {/* Task card component */}
        <ViewDiv className="flex flex-row w-full p-4 justify-between items-start mx-auto">
          <TaskCard
            title={"Today’s Tasks"}
            tasks={tasks}
            planTask={planTask}
            userPhase={userPhase.userPhase}
          />
        </ViewDiv>

        <ViewDiv className="flex flex-col justify-center items-left bg-[#FFF7FA] rounded-3xl p-6 max-w-sm w-full mx-auto">
          <TextDiv className="font-semibold text-black text-base">
            Did you Know? {` `}
          </TextDiv>
          <TextDiv className="text-[#535C6C] text-sm font-normal">
            During the winter months, a woman’s flow, period duration, and even
            pain level are longer than the summer
          </TextDiv>
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
export default connect(mapStateToProps)(HomeScreen);
