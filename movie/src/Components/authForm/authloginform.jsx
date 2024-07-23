import React, { useState } from "react";
import './authloginform.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";

function AuthLoginForm(){
    const[userPlace,setUserPlace]=useState(false)
    const[passPlace,setPassPlace]=useState(false)
    const[useremail,setUserEmail]=useState('')
    const[userpassword,setUserPassword]=useState('')
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(Auth,useremail,userpassword).then((response)=>{
            navigate('/')
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <div className="outer-box">
            <h2 className="title">React</h2>
           <form onSubmit={handleLogin}>
           <div>
                <p className={ !userPlace ? 'username-placeholder' : 'username-placeholderOn'}>Email</p>
                <input type="text" className="username" onFocus={()=>{
                    setUserPlace(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setUserPlace(true)
                    }else{
                        setUserPlace(false)
                    }
                    
                }} onChange={(e)=>{
                    setUserEmail(e.target.value)
                }} 
                value={useremail}  />
            </div>
            <div>
                <p className={ !passPlace ? 'password-placeholder' : 'password-placeholderOn'}>password</p>
                <input type="password" className="password" onFocus={()=>{
                    setPassPlace(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setPassPlace(true)
                    }else{
                        setPassPlace(false)
                    }
                    
                }}  onChange={(e)=>{
                    setUserPassword(e.target.value)
                }} 
                value={userpassword}  />
            </div>
            <button type="submit" className='logIn'>Login</button>
           </form>
        </div>
    );
}
export default AuthLoginForm;