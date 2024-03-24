import { View, Text } from "react-native";
import React from "react";
import { ImageDiv, TextDiv, ViewDiv } from "nativewind.config";

type ImageTextOverlayCardProps = {
  title: string;
  image: any;
};
const ImageTextOverlayCard: React.FC<ImageTextOverlayCardProps> = ({
  title,
  image,
}) => {
  return (
    <ViewDiv className="relative h-full w-full rounded-3xl overflow-hidden text-left">
      <ImageDiv
        source={{
          uri: image,
        }}
        resizeMode="cover"
        resizeMethod="resize"
        className="h-full w-full rounded-3xl relative"
        style={{
          zIndex: 1,
          overflow: "hidden",
        }}
      />
      {/* Dark linear gradient overlay */}
      <ViewDiv
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 2, // Ensure overlay appears above image
          backgroundColor:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))", // Dark linear gradient
          overflow: "hidden",
        }}
      />
      {/* Text */}
      <TextDiv className="absolute top-5 text-white font-medium text-sm z-10 text-left px-4">
        {title}
      </TextDiv>
    </ViewDiv>
  );
};

export default ImageTextOverlayCard;
