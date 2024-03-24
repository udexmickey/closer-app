import { ViewDiv } from "nativewind.config";
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

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

  const renderTabContent = () => {
    return tabs.map((tab, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.tab, activeTab === index && styles.activeTab]}
        onPress={() => setActiveTab(index)}
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
      <ViewDiv style={styles.tabContainer} className="justify-between">
        {renderTabContent()}
      </ViewDiv>
      <ViewDiv
        className="shadow-md bg-white w-full max-w-sm rounded-2xl mx-auto border-[#E9EDF2] mt-6 px-3 py-4"
        style={{ borderWidth: 1.5 }}
      >
        {/* Render the content based on active tab */}
        {tabs[activeTab].component}
      </ViewDiv>
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
