// Import necessary modules
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define the WeekDayProps interface including colors as props
interface WeekDayProps {
  dateNumber: number;
  currentDate: number; // Current date as timestamp
  dueDate: number; // Due date for ovulation phase as timestamp
  currentDateBackgroundColor?: string; // Background color for the current date
  currentDateTextColor?: string; // Text color for the current date
  dueDateBorderColor?: string; // Border color for the due date
}

// Define the WeekDay component
const WeekDay: React.FC<WeekDayProps> = ({
  dateNumber,
  currentDate,
  dueDate,
  currentDateBackgroundColor = "rgba(255, 75, 131, 0.6)",
  currentDateTextColor = "#FFFFFF",
  dueDateBorderColor,
}) => {
  const today_date = new Date(currentDate);
  const dueDateObj = new Date(dueDate);

  const isCurrentDate = today_date.getDate() === dateNumber;
  const isDueDate = dueDateObj.getDate() === dateNumber;

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const dayOfWeek = daysOfWeek[(dateNumber + 6) % 7];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.dayContainer,
          isCurrentDate && { backgroundColor: currentDateBackgroundColor },
          isDueDate && {
            borderColor: dueDateBorderColor,
            borderStyle: "dashed",
            borderWidth: 1,
          },
        ]}
      >
        <Text
          style={[
            styles.date,
            isCurrentDate && { color: currentDateTextColor },
          ]}
        >
          {dateNumber}
        </Text>
        <Text
          style={[styles.day, isCurrentDate && { color: currentDateTextColor }]}
        >
          {dayOfWeek}
        </Text>
      </View>
    </View>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  dayContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9F9",
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 12,
    rowGap: 8,
  },
  date: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#121212",
  },
  day: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#121212", // Default text color
  },
});

// Export the WeekDay component
export default WeekDay;
