import LottieView from "lottie-react-native";
import { ViewDiv } from "nativewind.config";
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Celebration from "../CelebrationEffect/celebration";

interface Tab {
  title: string;
  component: JSX.Element;
}

interface TabBarProps {
  tabs: Tab[];
  initialTab?: number;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, initialTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleCelebrationTrigger = (index: any) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    return tabs.map((tab, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.tab,
          activeTab === index && styles.activeTab,
          { zIndex: 10 },
        ]}
        onPress={() => handleCelebrationTrigger(index)}
      >
        <Text
          style={[styles.tabText, activeTab === index && styles.activeTabText]}
        >
          {tab.title}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ViewDiv style={styles.container}>
      <ViewDiv
        style={[styles.tabContainer, { zIndex: 10 }]}
        className="justify-between"
      >
        {renderTabContent()}
      </ViewDiv>
      <ViewDiv
        className="shadow-md bg-white w-full max-w-sm rounded-2xl mx-auto border-[#E9EDF2] mt-6 px-3 py-4"
        style={{ borderWidth: 1.5 }}
      >
        {/* Render the content based on active tab */}
        {tabs[activeTab].component}
      </ViewDiv>

      {/* <LottieView
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
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          pointerEvents: "none",
        }}
      /> */}
    </ViewDiv>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  tabContainer: {
    flexDirection: "row",
    // justifyContent: "between",
    alignItems: "center",
  },
  tab: {
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF4B83",
  },
  activeTabText: {
    color: "#FF4B83", // Same color as the border color
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#535C6C",
  },
});

export default TabBar;
