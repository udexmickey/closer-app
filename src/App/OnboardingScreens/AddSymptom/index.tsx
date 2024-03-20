import * as React from "react";
import {
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AuthButton } from "@/components/Buttons/Buttons";
import {
  ViewDiv,
  TextDiv,
  PressableDiv,
  FlatListDiv,
  ScrollViewDiv,
  TouchableOpacityDiv,
} from "nativewind.config";
import DatePickerInput from "@/components/inputs/DatePickerInput";
import systemData from "./symtopData";
import MultipleCheckBoxSelect from "@/components/multipleSelect/multipleCheckBoxSelect";

export interface Navigation {
  navigate: (screen: string, params?: any) => void;
}

export default function AddSymptom({ navigation }: { navigation: Navigation }) {
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const handleItemClick = (id: number) => {
    // Check if the item is already selected
    console.log("Clicked item ID:", id);
    const index = selectedItems.indexOf(id);
    if (index === -1) {
      // If not selected, add it to the list of selected items
      setSelectedItems([...selectedItems, id]);
    } else {
      // If already selected, remove it from the list of selected items
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ViewDiv
          className={`w-full items-center h-full justify-center bg-white`}
        >
          <ScrollViewDiv>
            <ViewDiv
              className={`w-full max-w-sm mt-0 max-h-full h-full py-4 justify-between items-start `}
            >
              <ViewDiv className="flex flex-row justify-left items-center max-w-xs w-full wrapper flex-wrap mb-6">
                <TextDiv className="text-sm font-normal text-[#656B76]">
                  What symptoms do you experience during the following phases?{" "}
                  {` `}
                  <TextDiv className="text-[#FF4B83] text-sm">
                    Select one or more for each phase
                  </TextDiv>
                </TextDiv>
              </ViewDiv>

              <ViewDiv className={`flex flex-col gap-4 w-full flex-1`}>
                <ViewDiv className="space-y-2 flex w-full">
                  <TextDiv className="text-base text-[#FF4B83] font-medium">
                    Before Period
                  </TextDiv>

                  <ViewDiv className="flex">
                    <MultipleCheckBoxSelect
                      DataArray={systemData}
                      setSelectedItems={setSelectedItems}
                      selectedItems={selectedItems}
                      handleItemClick={handleItemClick}
                    />
                  </ViewDiv>
                </ViewDiv>

                <ViewDiv className="space-y-2 flex w-full">
                  <TextDiv className="text-base text-[#FF4B83] font-medium">
                    During Period
                  </TextDiv>

                  <ViewDiv className="flex">
                    <MultipleCheckBoxSelect
                      DataArray={systemData}
                      setSelectedItems={setSelectedItems}
                      selectedItems={selectedItems}
                      handleItemClick={handleItemClick}
                    />
                  </ViewDiv>
                </ViewDiv>

                <ViewDiv className="space-y-2 flex w-full">
                  <TextDiv className="text-base text-[#FF4B83] font-medium">
                    After Period
                  </TextDiv>

                  <ViewDiv className="flex">
                    <MultipleCheckBoxSelect
                      DataArray={systemData}
                      setSelectedItems={setSelectedItems}
                      selectedItems={selectedItems}
                      handleItemClick={handleItemClick}
                    />
                  </ViewDiv>
                </ViewDiv>
              </ViewDiv>

              <ViewDiv className="flex w-full mt-4">
                <AuthButton
                  content={"Continue"}
                  onClickButton={() => {
                    navigation.navigate("SymptomsCreatedScreen");
                  }}
                  isRounded={true}
                  isLoading={undefined}
                  isDisabled={false}
                  textStyle="text-white text-center text-lg font-semibold"
                  ButtonStyle="bg-[#FF4B83] w-full"
                />
              </ViewDiv>
            </ViewDiv>
          </ScrollViewDiv>
        </ViewDiv>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
