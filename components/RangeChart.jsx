import { View } from "react-native";
import React, { useState } from "react";
import RangeSlider from "./RangeSlider";

export default function RangeChart({
  dataArray,
  minRange,
  maxRange,
  maxHeight,
  containerWidth,
  compareWith,
  initialValues,
  onRangeChange,
  activeChartColor = "#23527C",
  inactiveChartColor = "#BFBFBF",
  sliderHandleBackgroundColor="#22527C",
  sliderHandleTextColor="white",
  activeBarColor = "#22527C",
  inActiveBarColor = "#A7A7A7"
}) {
  const occurrences = {};
  dataArray.forEach((item) => {
    const value = item[compareWith];
    if (occurrences[value]) {
      occurrences[value] += 1;
    } else {
      occurrences[value] = 1;
    }
  });

  const [rangeValues, setRangeValues] = useState(
    Array.isArray(initialValues) ? initialValues : [initialValues]
  );

  const handleValuesChange = (values) => {
    setRangeValues(values);
    onRangeChange(values);
  };

  const maxCount = Math.max(...Object.values(occurrences));
  const heightUnit = maxHeight / maxCount;

  // Determine step size for grouping numbers
  const stepSize = 1;
  const groupedRange = Math.ceil((maxRange - minRange) / stepSize);

  // Determine if it's a single handle slider or double handle
  const isSingleHandle = rangeValues.length === 1;
  const sliderValue = rangeValues[0];

  return (
    <View style={{ width: containerWidth }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: maxHeight,
          alignItems: "flex-end",
          position: "relative",
          top: 24,
          width: containerWidth - 35,
          margin: "auto",
        }}
      >
        {Array.from({ length: groupedRange + 1 }, (_, index) => {
          const startValue = minRange + index * stepSize;
          const endValue = Math.min(startValue + stepSize - 1, maxRange);

          // Determine if the bar is within the range for single or double handle slider
          const inRange = isSingleHandle
            ? startValue <= sliderValue // For single handle, everything to the left is in range
            : startValue >= rangeValues[0] && endValue <= rangeValues[1]; // For double handle, it's between two values

          const isHighlighted = occurrences[startValue];

          const color = isHighlighted
            ? inRange
              ? activeChartColor // Darker color for bars within the range
              : inactiveChartColor // Lighter color for bars outside the range
            : "transparent";

          const barHeight = isHighlighted
            ? occurrences[startValue] * heightUnit
            : heightUnit;

          return (
            <View
              key={index}
              style={{
                height: barHeight,
                backgroundColor: color,
                flex: 1,
                // marginHorizontal: 0.1, // Adjust spacing between bars
              }}
            />
          );
        })}
      </View>
      <RangeSlider
        initialValues={initialValues}
        min={minRange}
        max={maxRange}
        step={1}
        width={containerWidth - 35}
        onValuesChange={handleValuesChange}
        activeChartColor={activeChartColor}
        inactiveChartColor={inactiveChartColor}
        sliderHandleBackgroundColor={sliderHandleBackgroundColor}
        sliderHandleTextColor={sliderHandleTextColor}
        activeBarColor={activeBarColor}
        inActiveBarColor={inActiveBarColor}
      />
    </View>
  );
}
