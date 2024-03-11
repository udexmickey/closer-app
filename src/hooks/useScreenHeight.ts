import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function useScreenHeight() {
  const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
  const [width, setWidth] = useState<number>(Dimensions.get("screen").width);

  useEffect(() => {
    Dimensions.addEventListener("change", ({ window: { height, width } }) => {
      setHeight(height);
      setWidth(width);
    });
  }, [height, width]);

  return [ height, width ];
}