// import React from 'react'

// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// const Slidercomponent = ({ value, min, max, onChange }) => {
//   return (
//     <Box sx={{ width: 100 }} className="slider">
//     <Slider
//       value={value}
//       onChange={onChange}
//       valueLabelDisplay="auto"
//       min={min}
//       max={max}
//     />
//   </Box>
//   )
// }

// export default Slidercomponent

import React, { useState } from "react";
import l from"./slider.module.css";

const Slidercomponent = ({ value1, min, max, onChange1,value2,onChange2 }) => {
  // const [minValue, setMinValue] = useState(10);
  // const [maxValue, setMaxValue] = useState(500);

  // const handleMinValueChange = (event) => {
  //   const value = Math.min(Number(event.target.value));
  //   setMinValue(value);
  // };

  // const handleMaxValueChange = (event) => {
  //   const value = Math.max(Number(event.target.value));
  //   setMaxValue(value);
  // };

  return (
    <div className={l.multirangeslider}>
    <div className={l.slidervalues}>
        <span>{value1}</span>
        <span>{value2}</span>
      </div>
      <input
        type="range"
        value={value1}
        onChange={onChange1}
        min={min}
        max={max}
      />
      
    
      <input
        type="range"
        value={value2}
        onChange={onChange2}
        max={max}
      />

      
    </div>
  );
};

export default Slidercomponent;
 
