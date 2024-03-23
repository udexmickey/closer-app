import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ViewDiv, TextDiv, TouchableOpacityDiv } from "nativewind.config";
import { AntDesign } from "@expo/vector-icons";
import WeeklyDueDate from "../WeeklyDueDate";
import WeekDay from "../WeeklyDueDate";
import { FlatList } from "react-native-gesture-handler";

const LogPeriodIndicator = () => {
  // Generate an array of date numbers representing the days of the week
  const currentDate = new Date();
  const startOfWeek = currentDate.getDate() - currentDate.getDay(); // Get the starting day of the week (Sunday)
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => startOfWeek + i + 1); // Generate an array of date numbers for the current week

  return (
    <ViewDiv className="flex flex-col w-full gay-y-16">
      <ViewDiv className="flex flex-row w-full justify-between items-center">
        <ViewDiv>
          <TextDiv>
            July 2024 {` `}{" "}
            <AntDesign name="calendar" size={20} color="black" />
          </TextDiv>
        </ViewDiv>

        <TouchableOpacityDiv className="w-max justify-center items-center bg-[#ff4b83] text-white rounded-full py-2 px-3">
          <TextDiv className="text-white text-sm font-semibold">
            Log Period
          </TextDiv>
        </TouchableOpacityDiv>
      </ViewDiv>

      {/* <ViewDiv className="flex flex-row w-full justify-center items-center wrapper flex-wrap">
        <ViewDiv className="flex flex-col max-w-max w-max justify-center  items-center bg-[#F8F9F9] rounded-2xl p-3">
          <TextDiv className="text-xl font-normal text-[#121212]">12</TextDiv>
          <TextDiv className="text-xl font-normal text-[#121212]">S</TextDiv>
        </ViewDiv>
      </ViewDiv> */}

      <ViewDiv className="flex flex-col w-full justify-center items-center wrapper flex-wrap mx-auto max-w-screen">
        <FlatList
          data={daysOfWeek}
          contentContainerStyle={{
            paddingVertical: 15,
            gap: 10,
            // width: "100%", //this part is throwing error when i refresh but with the same property i get to center my flatlist correctly
            justifyContent: "center",
          }}
          renderItem={({ item }) => (
            <WeekDay
              dateNumber={item}
              currentDate={new Date().getTime()}
              dueDate={new Date(2024, 3, 24).getTime()}
              currentDateBackgroundColor="rgba(255, 75, 131, 0.6)"
              dueDateBorderColor="#F26D6D"
            />
          )}
          keyExtractor={(item) => item.toString()}
          horizontal // Render the FlatList horizontally
        />

        <TouchableOpacityDiv>
          <AntDesign name="down" size={20} color="black" />
        </TouchableOpacityDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default LogPeriodIndicator;
