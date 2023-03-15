import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Slidercomponent = ({ value, min, max, onChange }) => {
  return (
    <Box sx={{ width: 300 }} className="slider">
    <Slider
      value={value}
      onChange={onChange}
      valueLabelDisplay="auto"
      min={min}
      max={max}
    />
  </Box>
  )
}

export default Slidercomponent







