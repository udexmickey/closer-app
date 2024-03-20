import { TextDiv, TouchableOpacityDiv, ViewDiv } from "nativewind.config";
import React from "react";

interface ArrayItem {
  id: number;
  name: string;
}

interface MultipleCheckBoxSelectProps {
  DataArray: ArrayItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  selectedItems: number[];
  handleItemClick: (id: number) => void;
}

const MultipleCheckBoxSelect: React.FC<MultipleCheckBoxSelectProps> = ({
  DataArray,
  setSelectedItems,
  selectedItems = [],
  handleItemClick,
}) => {
  const isSelected = (id: number) => selectedItems.includes(id);

  return (
    <ViewDiv className="flex flex-row justify-left items-start max-w-lg w-full wrapper flex-wrap gap-y-2 gap-x-4">
      {DataArray.map((item) => (
        <TouchableOpacityDiv
          onPress={() => handleItemClick(item.id)}
          key={item.id}
        >
          <ViewDiv
            key={item.id}
            className={`text-sm text-[#535C6C] rounded-full px-4 py-2 border-2 ring-1 flex items-center justify-center w-max border-solid ${
              isSelected(item.id)
                ? "border-[#FFACC6] bg-[#FFF7FA]"
                : "border-[#E9EDF2]"
            }`}
          >
            <TextDiv className="text-sm text-[#535C6C]">{item.name}</TextDiv>
          </ViewDiv>
        </TouchableOpacityDiv>
      ))}
    </ViewDiv>
  );
};

export default MultipleCheckBoxSelect;
