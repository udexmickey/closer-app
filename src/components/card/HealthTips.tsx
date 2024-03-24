import { View, Text } from "react-native";
import React from "react";
import { ViewDiv, TextDiv, ImageDiv } from "nativewind.config";
import ImageTextOverlayCard from "./imageTextOverlayCard";

const HealthTips = () => {
  return (
    <ViewDiv className="flex-col justify-center items-left gap-y-4 max-w-3xl w-full">
      <ViewDiv className="flex flex-col justify-center items-left w-full gap-y-4 py-4 pb-8">
        <ViewDiv>
          <TextDiv className="font-semibold text-[#FF4B83] text-base">
            Health Tips {` `}
          </TextDiv>
        </ViewDiv>

        <ViewDiv className="flex-row justify-between items-center max-w-3xl w-full h-44 wrapper flex-wrap">
          <ViewDiv className="w-[47%]">
            {/* <TextDiv>The first with image</TextDiv> */}
            <ImageTextOverlayCard
              title={"My Period vs my Mood Swings"}
              image={
                "https://s3-alpha-sig.figma.com/img/d6f3/99e8/00a13e53455c789e9fe46cc8479600f1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Go6-zvdrGfs3~FrI84Kt00tRbv~IdE5ykb2Mn1lLsNCXuVd3ARPFIkX1~NiFivzantcYaG~yCi54AgkryRz4eOq4axYRU1cXQ0N3eoqc1RXR3aFy8SUDst0WnV7XoTutxvP5WCGB2dZv6~Iw2RgdUBYSZfV3PLFmiejQXxfUJ78pwqSS0mQ5ch6KIafEjw4IVY6o00ntq0x6y~KmLlEjxXLWPLJWcFqJV1HOMmnSYVhjhzZi3t5vJ9fPBI1G8G3XA0csQW6rI499hfLPtgGbZ5lI646MO7ppZQO~Uwrk4zsKHXOOFrOA-uwe2CPyD947fU6LSRvUpnbrJumAodTUqw__"
              }
            />
          </ViewDiv>
          <ViewDiv className=" w-[47%]">
            <ImageTextOverlayCard
              title={"Mood Swings and symptoms"}
              image={
                "https://s3-alpha-sig.figma.com/img/dc88/6a1f/38265b393ac39151591f180dcbd1c368?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i~LkMxEIPO6zMidBkKfzdrNk5HRvGh2hgGkC0iIxiucjQhlR5oRoB10dajhUybiACRHZAgBnkjxbxFr7QIQrpbOxP~g2NlUBPTrFKCYah51EumUAhx6bWnG--BTpkXpy7I0AviWNq6F1NdzYggNTW8yK-9Tgw5VsZv7BhECDUCe0JKWBlKzBIWd~buqzQnbYsHa7fNa9yza8J2a8wQU0Ih2tQYUJPNvGoDe8Lc3oSJ5AlBcqV33gqkHFXUWybk1o0hdrd3oObANOUdjdsAfcAKRVVZUH7BcFxuPYnwzv6pkqv-H0SM-Z~1L72o2tltXDE4-hEa7n20mEh~S7TJ2q6Q__"
              }
            />
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  );
};

export default HealthTips;
