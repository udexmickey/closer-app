import { View, Text } from "react-native";
import React from "react";
import HeaderBanner from "@/components/banner/headerBanner";

interface BannerProps {
  userPhase: string; // Define the prop type for userPhase
}

const PhaseBanner: React.FC<BannerProps> = ({ userPhase }) => {
  // Render the appropriate screen based on the user phase
  const renderScreen = () => {
    switch (userPhase.toLowerCase()) {
      case "ovulatory":
        return (
          <HeaderBanner
            visible={true}
            user={"Adenike"}
            phase={"ovulatory"}
            description={"Connect, Harness Your Social Superpowers 🚀"}
            backgroundImage={require("../../assets/images/ovulatory-background.png")}
            backgroundColor={"#FFF7FA"}
            phaseColor={"#FF4B83"}
          />
        );
      case "luteal":
        return (
          <HeaderBanner
            visible={true}
            user={"Grace"}
            phase={"Luteal"}
            description={"Focus Inward for Personal Growth 🍁"}
            backgroundImage={require("../../assets/images/luteal-background.png")}
            backgroundColor={"#FFF7F1"}
            phaseColor={"#FD7900"}
          />
        );
      case "follicular":
        return (
          <HeaderBanner
            visible={true}
            user={"Comfort"}
            phase={"follicular"}
            description={"Create, Dream Big, Initiate 🌟"}
            backgroundImage={require("../../assets/images/follicular-background.png")}
            backgroundColor={"#F7FCF7"}
            phaseColor={"#0F9B3F"}
          />
        );
      case "period":
        return (
          <HeaderBanner
            visible={true}
            user={"Jennifer"}
            phase={"period"}
            description={"Reflect, Recharge, Reset 💪🏾"}
            backgroundImage={require("../../assets/images/period-background.png")}
            backgroundColor={"#E1F1FF"}
            phaseColor={"#006FFD"}
          />
        );
      default:
        return (
          <HeaderBanner
            visible={true}
            user={"AI"}
            phase={"Free"}
            description={"Kindly log your next period's due date 🤒"}
            backgroundImage={require("../../assets/images/follicular-background.png")}
            backgroundColor={"#FFF7FA"}
            phaseColor={"#006FFD"}
          />
        );
    }
  };

  return (
    <View>
      {/* Render the appropriate screen based on user phase */}
      {renderScreen()}
    </View>
  );
};

export default PhaseBanner;
