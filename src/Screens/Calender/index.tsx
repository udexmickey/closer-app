import { View, Button, Text } from "react-native";
import { Navigation } from "../../App/Authentication/Login";
import { ButtonDiv, TextDiv, ViewDiv } from "nativewind.config";
import { Drawer } from "react-native-paper";
import React from "react";

export function CalenderScreen({ navigation }: { navigation: Navigation }) {
  const [active, setActive] = React.useState("");

  return (
    // <Drawer.CollapsedItem
    //   focusedIcon="inbox"
    //   unfocusedIcon="inbox-outline"
    //   label="Inbox"
    // >
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="search"
        active={active === "search"}
        icon="calendar"
        onPress={() => setActive("search")}
      />
      <Drawer.Item
        label="Second Item"
        active={active === "second"}
        onPress={() => setActive("second")}
      />
    </Drawer.Section>
    // </Drawer.CollapsedItem>
  );
}
