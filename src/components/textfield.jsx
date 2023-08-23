import React from 'react'

export const TextField = ({start,set,type}) => {
  return (
    <input type={type} placeholder={`Enter ${type==="text"?"username":type}`} className='signin-text' value={start} onChange={({target:{value}})=>set(value)}></input>
  )
}
