import React from 'react'
import withFilter from './withFilter'
const Blur = ({ value, handleChange, unit }) => {
  
  return (
    <div className='filters-ranges'>
      <input type="range" value={value} onChange={({ target: { value } }) => handleChange(value)} min="0" max="10" />
      <h4>{value}{unit}</h4>
    </div>
  )
}

export default withFilter(Blur,{name:'Blur'})