import React from "react";
import { View } from "react-native";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";

const MyCalendar = () => {
  const currentDate = new Date(); // Get current date
  const endDate = new Date();
  endDate.setDate(currentDate.getDate() + 4); // Add 5 days to current date

  // Define phase durations
  const phaseDurations = {
    ovulatory: 5,
    period: 5,
    follicular: 5,
    luteal: 7,
  };

  let newMarkedDates: { [date: string]: any } = {}; // New object for marked dates

  // Calculate start dates for the ovulatory phase
  for (const phase in phaseDurations) {
    if (Object.prototype.hasOwnProperty.call(phaseDurations, phase)) {
      const phaseDuration =
        phaseDurations[phase as keyof typeof phaseDurations];

      for (let i = 0; i < phaseDuration; i++) {
        const dateString = endDate.toISOString().split("T")[0];
        let backgroundColor, dotColor, textColor;
        switch (phase) {
          case "period":
            backgroundColor = "#E1F1Ff"; // #E1F1Ff color for period phase
            // dotColor = "#006FFD";
            textColor = "#FFFFFF"; // White text color for period phase
            break;
          case "ovulatory":
            backgroundColor = "#FFEEF4"; // Pink color for ovulatory phase
            // dotColor = "#FF0000"; // Red color for ovulatory phase
            textColor = "#000000"; // Black text color for ovulatory phase
            break;
          case "follicular":
            backgroundColor = "#EAF5EE";
            // dotColor = "#006400";
            textColor = "#000000"; // Black text color for follicular phase
            break;
          case "luteal":
            backgroundColor = "#FFF1E4"; // Default color for remaining phases
            // dotColor = "#FFF1E4"; // Default color for remaining phases
            textColor = "#000000"; // Default text color for remaining phases
            break;
          default:
            backgroundColor = "#FFF1E4"; // Default color for remaining phases
            // dotColor = "#FFF1E4"; // Default color for remaining phases
            textColor = "#000000"; // Default text color for remaining phases
        }
        newMarkedDates[dateString] = {
          selected: true,
          marked: true,
          dotColor,
          selectedColor: backgroundColor,
          textDisabledColor: textColor,
          selectedDayTextColor: textColor,
        };
        endDate.setDate(endDate.getDate() - 1);
      }
    }
  }

  // Set selected color for current date
  const currentDateString = currentDate.toISOString().split("T")[0];
  newMarkedDates[currentDateString] = {
    selectedColor: "#FF4B83", //this is the current date selectedcolor/backgroundcolor
    dotColor: "#FF4B83",
    selectedDayTextColor: "#006FFD",
    textColor: "#006FFD",
    ...newMarkedDates[currentDateString],
  };

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        style={{
          height: 345,
          marginHorizontal: 6,
          borderRadius: 10,
        }}
        // Add any props you need to customize the calendar
        onDayPress={(day) => {
          console.log("Selected day: ", day);
        }}
        markedDates={newMarkedDates}
        hideExtraDays={false}
        enableSwipeMonths={true}
        collapsable={false}
        disableAllTouchEventsForDisabledDays={true}
        theme={{
          selectedDayTextColor: "black",
        }}
        markingType="multi-dot"
      />
    </View>
  );
};

export default MyCalendar;
