import { Navigation } from "../../App/Authentication/Login";
import { useAuth } from "@/context/authContext";
import { ScrollViewDiv, TextDiv, ViewDiv } from "nativewind.config";
import HeaderBanner from "@/components/banner/headerBanner";
import OvulationNotifier from "@/components/Notifications/OvulationNotifier";
import TaskCard, { TaskItem } from "@/components/card/tasks.card";
import sampleTasks from "./seed.data";
import { useState } from "react";
import LogPeriodIndicator from "@/components/indicator/log.period.indicator";

export function HomeScreen({ navigation }: { navigation: Navigation }) {
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
        <HeaderBanner
          visible={true}
          user={"Adenike"}
          phase={"Ovulatory Phase."}
          description={"Connect, Harness Your Social Superpowers 🚀"}
          backgroundImage={require("../../assets/images/banner-background.png")}
          backgroundColor={"#FFF7FA"}
          phaseColor={"#FF4B83"}
        />

        {/* //Date picker for active period/ovulation phase */}
        <ViewDiv className="flex flex-row w-full p-4 mx-auto justify-center">
          <LogPeriodIndicator />
        </ViewDiv>

        {/* Ovalution notifier component */}
        <ViewDiv>
          <OvulationNotifier
            days={4}
            date={20}
            month={"July"}
            backgroundColor={"#FFF7FA"}
            borderColor={"#F26D6D"}
          />
        </ViewDiv>

        {/* Task card component */}
        <ViewDiv className="flex flex-row w-full p-4 justify-between items-start mx-auto">
          <TaskCard title={"Today’s Tasks"} tasks={tasks} planTask={planTask} />
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
}
