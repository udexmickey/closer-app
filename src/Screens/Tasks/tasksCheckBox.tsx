import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons"; // Import the icons from Expo vector icons
import { TextDiv, TouchableOpacityDiv, ViewDiv } from "nativewind.config";

export interface TasksItem {
  tasks: string;
  completed: boolean;
}

interface TasksCheckBoxProps {
  title: string;
  tasks: TasksItem[];
  userPhase: string;
}

const TasksCheckBox: React.FC<TasksCheckBoxProps> = ({
  title,
  tasks,
  userPhase,
}) => {
  const [tasksList, setTasksList] = useState<TasksItem[]>(tasks);
  const [page, setPage] = useState(0);
  const pageSize = 4;

  const totalPages = Math.ceil(tasksList.length / pageSize);

  const toggleTasksCompletion = (index: number) => {
    const updatedTasks = [...tasksList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasksList(updatedTasks);
  };

  const planMoreTasksBackgroundColor =
    userPhase === "ovulatory"
      ? "#FF4B83"
      : userPhase === "luteal"
      ? "#FD7900"
      : userPhase === "follicular"
      ? "#0F9B3F"
      : userPhase === "period"
      ? "#006FFD"
      : "#red";

  const renderTasksItem = ({
    item,
    index,
  }: {
    item: TasksItem;
    index: number;
  }) => (
    <TouchableOpacity
      style={styles.tasksItem}
      onPress={() => toggleTasksCompletion(index)}
    >
      <View style={styles.checkbox}>
        {item.completed ? (
          // <AntDesign name="checkcircle" size={20} color="#FF4B83" />
          <MaterialCommunityIcons
            name="record-circle"
            size={20}
            color="#FF4B83"
          />
        ) : (
          <Feather name="circle" size={20} color="#535C6C" />
        )}
      </View>
      <Text style={[styles.tasksText, item.completed && styles.completedTasks]}>
        {item.tasks}
      </Text>
    </TouchableOpacity>
  );

  const startIndex = page * pageSize;
  const endIndex = Math.min((page + 1) * pageSize, tasksList.length);
  const visibleTasks = tasksList.slice(startIndex, endIndex);

  return (
    <ViewDiv style={styles.container}>
      <View>
        <TextDiv className="text-[#FF4B83] font-medium text-left pb-2">
          {title}
        </TextDiv>
      </View>

      {/* Render the FlatList */}
      <ViewDiv>
        <FlatList
          data={visibleTasks}
          renderItem={renderTasksItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.tasksList}
        />
      </ViewDiv>
    </ViewDiv>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  tasksList: {
    flexGrow: 1,
  },
  tasksItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 10,
    color: "#535C6C",
  },
  tasksText: {
    fontSize: 12,
    color: "#535C6C",
  },
  completedTasks: {
    textDecorationLine: "line-through",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TasksCheckBox;
