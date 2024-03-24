import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"; // Import the icons from Expo vector icons
import { TextDiv, TouchableOpacityDiv, ViewDiv } from "nativewind.config";

export interface TipsItem {
  tips: string;
  completed: boolean;
}

interface CareTipsCheckBoxProps {
  title: string;
  tips: TipsItem[];
  userPhase: string;
}

const CareTipsCheckBox: React.FC<CareTipsCheckBoxProps> = ({
  title,
  tips,
  userPhase,
}) => {
  const [tipsList, setTipsList] = useState<TipsItem[]>(tips);
  const [page, setPage] = useState(0);
  const pageSize = 4;

  const totalPages = Math.ceil(tipsList.length / pageSize);

  const toggleTipsCompletion = (index: number) => {
    const updatedTips = [...tipsList];
    updatedTips[index].completed = !updatedTips[index].completed;
    setTipsList(updatedTips);
  };

  const planMoreTipsBackgroundColor =
    userPhase === "ovulatory"
      ? "#FF4B83"
      : userPhase === "luteal"
      ? "#FD7900"
      : userPhase === "follicular"
      ? "#0F9B3F"
      : userPhase === "period"
      ? "#006FFD"
      : "#red";

  const renderTipsItem = ({
    item,
    index,
  }: {
    item: TipsItem;
    index: number;
  }) => (
    <TouchableOpacity
      style={styles.tipsItem}
      onPress={() => toggleTipsCompletion(index)}
    >
      <View style={styles.checkbox}>
        {item.completed ? (
          <AntDesign name="checkcircle" size={12} color="#FF4B83" />
        ) : (
          <Feather name="circle" size={12} color="#535C6C" />
        )}
      </View>
      <Text style={[styles.tipsText, item.completed && styles.completedTips]}>
        {item.tips}
      </Text>
    </TouchableOpacity>
  );

  const startIndex = page * pageSize;
  const endIndex = Math.min((page + 1) * pageSize, tipsList.length);
  const visibleTips = tipsList.slice(startIndex, endIndex);

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
          data={visibleTips}
          renderItem={renderTipsItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.tipsList}
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

  tipsList: {
    flexGrow: 1,
  },
  tipsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 10,
    color: "#535C6C",
  },
  tipsText: {
    fontSize: 12,
    color: "#535C6C",
  },
  completedTips: {
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

export default CareTipsCheckBox;
