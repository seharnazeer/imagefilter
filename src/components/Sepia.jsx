import React from 'react'
import withFilter from './withFilter'
const Sepia = ({ value, handleChange, unit }) => {

  return (
    <div className='filters-ranges'>
      <input type="range" value={value} onChange={({ target: { value } }) => { handleChange(value) }} min="0" max="100" />
      <h4>{value}{unit}</h4>
    </div>
  )
}

export default withFilter(Sepia,{name:'Sepia'})