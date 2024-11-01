import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const RangeSlider = ({
  initialValues,
  min,
  max,
  step,
  width,
  onValuesChange,
  sliderHandleBackgroundColor,
  sliderHandleTextColor,
  activeBarColor,
  inActiveBarColor,
}) => {
  const [sliderValues, setSliderValues] = useState(initialValues);

  const handleValuesChange = (values) => {
    setSliderValues(values);
    if (onValuesChange) {
      onValuesChange(values);
    }
  };
  const CustomMarkerLeft = ({ currentValue }) => (
    <View style={{alignItems:'center', justifyContent:'center',backgroundColor:sliderHandleBackgroundColor ,padding:8, borderRadius:4}}>
      <Text style={{color:sliderHandleTextColor}}>{currentValue}</Text>
    </View>
  );
  
  const CustomMarkerRight = ({ currentValue }) => (
    <View style={{alignItems:'center', justifyContent:'center',backgroundColor:sliderHandleBackgroundColor ,padding:8, borderRadius:4}}>
      <Text style={{color:sliderHandleTextColor}}>{currentValue}</Text>
    </View>
  );
  return (
    <ScrollView>
      <View style={{paddingHorizontal:18}}>
        <MultiSlider
          values={sliderValues}
          onValuesChangeFinish={handleValuesChange}
          min={min}
          max={max}
          step={step}
          isMarkersSeparated={true}
          selectedStyle={{ backgroundColor: activeBarColor }}
          unselectedStyle={{ backgroundColor: inActiveBarColor }}
          sliderLength={width}
          customMarkerLeft={(e) => (
            <CustomMarkerLeft currentValue={e.currentValue} />
          )}
          customMarkerRight={(e) => (
            <CustomMarkerRight currentValue={e.currentValue} />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default RangeSlider;
