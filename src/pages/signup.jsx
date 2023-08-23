import React,{useState} from 'react'
import { TextField } from '../components'
import { ImageFilter } from '../assests'
import { useNavigate } from 'react-router'
export const SignUp = () => {
  const navigate=useNavigate();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [name,setname]=useState("")
  return (
    <div className='signup area'>
      <div className="signup-inner">
      <img className="logo" src={ImageFilter}/>
        <TextField start={email} set={setemail} type={"email"}/>
        <TextField start={password} set={setpassword} type={"password"}/>
        <TextField start={name} set={setname} type={"text"}/>
        <button className='signup-button' onClick={()=>navigate("/")}>Sign Up</button>
        </div>
       
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
    </div >
  )
}
