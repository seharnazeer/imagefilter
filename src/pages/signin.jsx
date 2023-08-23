import React, { useState } from 'react'
import { TextField } from '../components'
import { ImageFilter } from '../assests'
import { useNavigate } from 'react-router'
export const Signin = () => {
  const navigate=useNavigate();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
  return (
    <div className='sigin-upper area'>
        <div className='inner-signin'>
        <img className="logo" src={ImageFilter} alt="pic-alt"/>
        <TextField start={email} set={setemail} type={"email"}/>
        <TextField start={password} set={setpassword} type={"password"}/>
        <button className='signin-button' onClick={()=>navigate("/filterimage")}>Sign In</button>
        </div>
        <div className='signup-div' onClick={()=>navigate("/signup")}>Sign Up</div>
        <div className='forgot-div'>Forgot Password?</div>
        <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
  )
}