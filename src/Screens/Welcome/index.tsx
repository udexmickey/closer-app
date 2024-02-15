import {
  View,
  Text,
  Platform,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";
import React from "react";
import { Navigation } from "../Login/login";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function WelcomeScreen({ navigation }: { navigation: Navigation }) {
  return (
    // <SafeAreaView>
    <View style={style.card}>
      <Image
        source={require("../../assets/images/closer-image.png")}
        style={style.image}
        accessibilityLabel={`Closer welcome banner`}
        resizeMethod="resize"
        resizeMode="contain"
      />
      <Text>Welcome screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
    // {/* </SafeAreaView> */}
  );
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    aspectRatio: 1,
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});
