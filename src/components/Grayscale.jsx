import React from 'react'
import withFilter from './withFilter'
const Grayscale= ({ value, handleChange, unit }) => {

  return (
    <div className='filters-ranges'>
      <input type="range" value={value} onChange={({ target: { value } }) => { handleChange(value) }} min="000" max="100" />
      <h4>{value}{unit}</h4>
    </div>
  )
}

export default withFilter(Grayscale,{name:'Grayscale'})