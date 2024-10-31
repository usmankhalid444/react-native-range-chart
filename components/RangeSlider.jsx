import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const CustomMarkerLeft = ({ currentValue }) => (
  <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'#23527C',padding:8, borderRadius:4}}>
    <Text style={{color:'white'}}>{currentValue}</Text>
  </View>
);

const CustomMarkerRight = ({ currentValue }) => (
  <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'#23527C',padding:8, borderRadius:4}}>
    <Text style={{color:'white'}}>{currentValue}</Text>
  </View>
);

const RangeSlider = ({
  initialValues,
  min,
  max,
  step,
  width,
  onValuesChange,
}) => {
  const [sliderValues, setSliderValues] = useState(initialValues);

  const handleValuesChange = (values) => {
    setSliderValues(values);
    if (onValuesChange) {
      onValuesChange(values);
    }
  };

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
          selectedStyle={{ backgroundColor: "#23527C" }}
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
