
# react-native-range-chart

## Description
`react-native-range-chart` is a versatile and customizable range slider component for React Native, which includes a range slider with one or two handles and an integrated column chart. The column heights represent the frequency of occurrences, making it easy to visualize data distribution within a defined range.

![App Screenshot](https://i.postimg.cc/59Lr6dPC/Screenshot-2024-10-31-at-11-07-11-PM.png)
![App Screenshot](https://i.postimg.cc/9FBNYPHX/Screenshot-2024-10-31-at-11-07-41-PM.png)
![App Screenshot](https://i.postimg.cc/B6D29XTB/Screenshot-2024-11-01-at-12-48-09-PM.png)


## Installation
To install the package, run:
```
npm i react-native-range-chart
```

## Usage
Here’s a basic example of how to use the `RangeChart` component:

```javascript
import RangeChart from 'react-native-range-chart';

const YourComponent = () => {
  const dataArray = [
    { value: 10, count: 2 },
    { value: 15, count: 5 },
    { value: 20, count: 3 },
    // More data points
  ];

  const handleRangeChange = (newRange) => {
    console.log('Selected Range:', newRange);
  };

  return (
    <RangeChart
      dataArray={dataArray}
      minRange={0}
      maxRange={30}
      maxHeight={200}
      containerWidth={350}
      compareWith="value"
      initialValues=[30,70]
      onRangeChange={handleRangeChange}
    />
  );
};
```

For a single-handle slider, set `initialValues` as e.g. `[5]`. For a double-handle slider, set `initialValues` as `[4,7]`.

## Props

| Prop            | Type          | Description                                                                                       |
|-----------------|---------------|---------------------------------------------------------------------------------------------------|
| **dataArray**   | `Array`       | Array of objects with data points, each containing a value to display on the chart and an occurrence count. |
| **minRange**    | `Number`      | Minimum value for the range slider.                                                               |
| **maxRange**    | `Number`      | Maximum value for the range slider.                                                               |
| **maxHeight**   | `Number`      | Maximum height for the column chart, adjusting based on occurrence frequency.                     |
| **containerWidth** | `Number`  | Width of the chart container.                                                                     |
| **compareWith** | `String`      | Key in the data array to compare values with.                                                     |
| **initialValues** | `Array`    | Initial values for the range slider; specify `[5]` for one handle, `[5,10]` for two handles. |
| **onRangeChange** | `Function`  | Callback function that returns the selected range.                                                |
| **activeChartColor**   | `String`       | Color used for active chart elements. default is `#23527C` |
| **inactiveChartColor**    | `String`      | Color used for inactive chart elements. default is `#BFBFBF`                                  |
| **sliderHandleBackgroundColor**    | `String`      | Background color of the slider handle. default is `#22527C`                         |
| **sliderHandleTextColor**   | `String`      | Text color on the slider handle. default is `white`                     |
| **activeBarColor** | `String`  | Color used for the active state of the bar. default is `#22527C`                                      |
| **inActiveBarColor** | `String`      | Color used for the inactive state of the bar. default is `#A7A7A7`                              |

## License
This project is licensed under the MIT License.

## Contact
For more information, please reach out to the developer at usman.khalid444@gmail.com
