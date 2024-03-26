import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"; // Import the icons from Expo vector icons
import { TouchableOpacityDiv } from "nativewind.config";

export interface TaskItem {
  task: string;
  completed: boolean;
}

interface TaskCardProps {
  title: string;
  tasks: TaskItem[];
  planTask: () => void;
  // buttonBackgroundColor: string;
  userPhase: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  tasks,
  planTask,
  // buttonBackgroundColor,
  userPhase,
}) => {
  const [taskList, setTaskList] = useState<TaskItem[]>(tasks);
  const [page, setPage] = useState(0);
  const pageSize = 4;

  const totalPages = Math.ceil(taskList.length / pageSize);

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
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

  const renderTaskItem = ({
    item,
    index,
  }: {
    item: TaskItem;
    index: number;
  }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => toggleTaskCompletion(index)}
    >
      <View style={styles.checkbox}>
        {item.completed ? (
          <AntDesign name="checkcircle" size={20} color="#FF4B83" />
        ) : (
          <Feather name="circle" size={20} color="#535C6C" />
        )}
      </View>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>
        {item.task}
      </Text>
    </TouchableOpacity>
  );

  const loadMore = (direction: "left" | "right") => {
    if (direction === "right" && page < totalPages - 1) {
      setPage(page + 1);
    } else if (direction === "left" && page > 0) {
      setPage(page - 1);
    }
  };

  const startIndex = page * pageSize;
  const endIndex = Math.min((page + 1) * pageSize, taskList.length);
  const visibleTasks = taskList.slice(startIndex, endIndex);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.arrows}>
          <TouchableOpacity onPress={() => loadMore("left")}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => loadMore("right")}>
            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Render the FlatList */}
      <View>
        <FlatList
          data={visibleTasks}
          renderItem={renderTaskItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.taskList}
          scrollEnabled={false}
        />
      </View>
      <TouchableOpacityDiv
        className="w-max justify-center items-center bg-[#FF4B83] text-white rounded-full py-3 px-6 mt-3"
        style={[
          styles.button,
          { backgroundColor: planMoreTasksBackgroundColor ?? "#FF4B83" },
        ]}
        onPress={() => planTask()}
      >
        <Text style={styles.buttonText}>Plan Tasks</Text>
      </TouchableOpacityDiv>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111212",
  },
  arrows: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
  },
  taskList: {
    flexGrow: 1,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 10,
    color: "#535C6C",
  },
  taskText: {
    fontSize: 16,
    color: "#535C6C",
  },
  completedTask: {
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

export default TaskCard;
