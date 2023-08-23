import React from 'react'
import withFilter from './withFilter'
const Brightness = ({ value, handleChange, unit }) => {

  return (
    <div className='filters-ranges'>
      <input type="range" value={value} onChange={({ target: { value } }) => { handleChange(value) }} min="100" max="200" />
      <h4>{value}{unit}</h4>
    </div>
  )
}

export default withFilter(Brightness,{name:'Brightness'})