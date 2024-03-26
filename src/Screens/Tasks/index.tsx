import { View, Button, Text } from "react-native";
import { Navigation } from "../../App/Authentication/Login";
import { ViewDiv, ScrollViewDiv } from "nativewind.config";
import { connect } from "react-redux";
import { RootState } from "@/redux/reducer";
import { UserPhaseState } from "@/redux/action/userPhaseAction";
import SelfCareBanner from "@/components/banner/TasksBanner";
import React, { useState } from "react";
import TabBar from "@/components/Tabs/tasks.tabs";
import TasksTips from "@/components/card/TasksTip.card";
import TasksBannerBanner from "@/components/banner/TasksBanner";
import sampleTasks from "./seed.data";
import { TasksItem } from "./tasksCheckBox";

// Define component props
interface TasksProps {
  navigation: Navigation;
  userPhase: UserPhaseState; // Update the type to UserPhaseState
}

const TasksScreen: React.FC<TasksProps> = ({ navigation, userPhase }) => {
  const [tasks, setTasks] = useState<TasksItem[]>(sampleTasks);

  const SetNewTaskScreen = () => {
    navigation.navigate("SetNewTaskScreen");
  };

  const tasktabs = [
    {
      title: "Current Task",
      component: (
        <TasksTips
          taskStatus={"Your Tasks for The Week"}
          description={
            "These tasks are expected to be completed in the next 20 days."
          }
          tasks={tasks}
        />
      ),
    },
    {
      title: "Upcoming Task",
      component: (
        <TasksTips
          taskStatus={"Upcoming Task"}
          description={""}
          tasks={tasks}
        />
      ),
    },
    {
      title: "Completed Task",
      component: (
        <TasksTips taskStatus={"Completed Tasks"} description={""} tasks={[]} />
      ),
    },
  ];

  return (
    <ViewDiv className="flex-1 bg-white pb-2">
      <ScrollViewDiv className="flex-1 bg-white gap-y-4 mt-0">
        {/* // Tasks header Banner for user phase component */}
        <TasksBannerBanner
          userPhase={userPhase}
          phase={"This Week’s Task"}
          description={
            "You have 3 tasks on the queue. Make sure you complete them when due."
          }
          backgroundColor={"#FFF7FA"}
          phaseColor={""}
          handleOnPress={SetNewTaskScreen}
        />

        <ViewDiv className=" bg-white w-full max-w-md mx-auto">
          <ViewDiv className="flex flex-col w-full py-4 mx-auto justify-center gap-y-4 px-6">
            <TabBar tabs={tasktabs} />
          </ViewDiv>
        </ViewDiv>
      </ScrollViewDiv>
    </ViewDiv>
  );
};

// Map Redux state to component props
const mapStateToProps = (state: RootState) => ({
  userPhase: state.userPhase,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(TasksScreen);
