import { View, Button, Text } from "react-native";
import { Navigation } from "../../App/Authentication/Login";
import { AuthButton } from "@/components/Buttons/Buttons";
import { useAuth } from "@/context/authContext";

export function HomeScreen({ navigation }: { navigation: Navigation }) {
  const { authContext } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 20,
      }}
    >
      <Text>Welcome to Home screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
      <AuthButton
        content={"LogOut"}
        onClickButton={() => authContext.signOut()}
        isRounded={true}
        isLoading={undefined}
        isDisabled={false}
        textStyle="text-white text-center text-lg font-semibold"
        ButtonStyle="bg-[#FF4B83] w-full"
      />
    </View>
  );
}
