import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {

    const handleSubmit=()=>{
        
    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text' placeholder='username'/>
            <input type='text' placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
