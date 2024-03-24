import { View, Text } from "react-native";
import React, { useState } from "react";
import { ViewDiv, TextDiv, ImageDiv } from "nativewind.config";
import TasksCheckBox, { TasksItem } from "@/Screens/Tasks/tasksCheckBox";
import sampleTasks from "@/Screens/Tasks/seed.data";
import EmptyTaskState from "@/Screens/Tasks/EmptyTaskState";

type TasksTipProps = {
  taskStatus: string;
  description: string;
};

const TasksTips: React.FC<TasksTipProps> = ({ taskStatus, description }) => {
  const [tasks, setTasks] = useState<TasksItem[]>(sampleTasks);
  return (
    <>
      {tasks.length < 1 ? (
        <EmptyTaskState />
      ) : (
        <ViewDiv className="flex-col justify-center items-left gap-y-8">
          <ViewDiv className="flex flex-col justify-center items-left w-full gap-y-4 pb-8">
            <TextDiv className="font-semibold text-[#FF4B83] text-base">
              {taskStatus} {` `}
            </TextDiv>
            {description && (
              <TextDiv className="text-[#535C6C] text-sm font-normal w-[95%]">
                {description}
              </TextDiv>
            )}
          </ViewDiv>

          <TasksCheckBox
            title={"Select checkbox once a task is completed"}
            tasks={tasks}
            userPhase={"luteal"}
          />
        </ViewDiv>
      )}
    </>
  );
};

export default TasksTips;
