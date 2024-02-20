import { View, Button, Text } from "react-native";
import { Navigation } from "../../App/Authentication/Login";

export function ProfileScreen({ navigation }: { navigation: Navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
