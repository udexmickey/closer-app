import { View, Button, Text } from "react-native";
import { Navigation } from "../Login/login";

export function CalenderScreen({ navigation }: { navigation: Navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Calender screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
