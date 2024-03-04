import React from 'react'
import '../App.css'

export const Slider = ({range,value,onchange}) => {
  return (
    <div className="slider-container">
        <input type="range" name="slider" className='slider'
          onChange={onchange} value={value} max={range.max} min={range.min}/>
    </div>
  )
}
