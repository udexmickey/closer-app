import { View, Button, Text } from "react-native";
import { Navigation } from "../../App/Authentication/Login";

export function RingScreen({ navigation }: { navigation: Navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Ring screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
