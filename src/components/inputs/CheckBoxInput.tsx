import React from "react";
import { CheckBox } from "react-native-elements";
import { View, StyleSheet } from "react-native";

interface CheckboxProps {
  title: string;
  checked: boolean;
  onPress: () => void;
}

const CheckboxInput: React.FC<CheckboxProps> = ({
  title,
  checked,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <CheckBox
        title={title}
        checked={checked}
        onPress={onPress}
        // containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
        checkedColor="#FF4B83"
        uncheckedColor="#E9EDF2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#4299E1",
    // padding: 8,
    // borderRadius: 6,
  },
  //   checkboxContainer: {
  //     backgroundColor: "#4299E1",
  //     borderWidth: 0,
  //     padding: 0,
  //   },
  checkboxText: {
    color: "#FF4B83",
    fontSize: 14,
    lineHeight: 16,
  },
});

export default CheckboxInput;
