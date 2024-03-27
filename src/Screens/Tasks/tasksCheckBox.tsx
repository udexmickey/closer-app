import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons"; // Import the icons from Expo vector icons
import { TextDiv, ViewDiv } from "nativewind.config";
import LottieView from "lottie-react-native";

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

  // / settings for the celebration animation
  const congratulationRef = React.useRef<LottieView>(null);

  const toggleTasksCompletion = (index: number) => {
    const updatedTasks = [...tasksList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasksList(updatedTasks);

    /// settings for the celebration animation
    // Check if the task is completed and play the animation
    if (updatedTasks[index].completed && congratulationRef.current) {
      congratulationRef.current.play();
      console.log("celebration clicked");
    }
  };

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
          scrollEnabled={false}
        />
      </ViewDiv>

      {/* /// settings for the celebration animation */}
      <LottieView
        source={require("../../assets/animations/celebration.json")}
        ref={congratulationRef}
        loop={false}
        resizeMode="cover"
        autoPlay
        style={{
          width: "100%",
          // height: 500,
          alignSelf: "center",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          zIndex: -1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          pointerEvents: "none",
        }}
      />
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
    zIndex: 100,
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
