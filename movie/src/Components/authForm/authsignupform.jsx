import React, { useState } from "react";
import './authsignupform.css'

function AuthSignUpForm(){
    const[fname,setFname]=useState(false)
    const[lname,setLname]=useState(false)
    const[username,setUsername]=useState(false)
    const[email,setEmail]=useState(false)
    const[password,setPassword]=useState(false)
    return (
        <div className="signup-outer-box">
            <h2 className="title">React</h2>
            <p className={ !fname ? 'fname-placeholder' : 'fname-placeholderOn'}>First Name</p>
            <input className="fname" type="text" onFocus={()=>{
                    setFname(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setFname(true)
                    }else{
                        setFname(false)
                    }
                    
                }} />

            <p className={ !lname ? 'lname-placeholder' : 'lname-placeholderOn'}>Last Name</p>
            <input className="lname" type="text" onFocus={()=>{
                    setLname(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setLname(true)
                    }else{
                        setLname(false)
                    }
                    
                }} />

            <p className={ !username ? 'sign-user-placeholder' : 'sign-user-placeholderOn'}>Username</p>
            <input className="signup-username" type="text" onFocus={()=>{
                    setUsername(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setUsername(true)
                    }else{
                        setUsername(false)
                    }
                    
                }} />

            <p className={ !email ? 'email-placeholder' : 'email-placeholderOn'}>Email</p>
            <input className="email" type="email" onFocus={()=>{
                    setEmail(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setEmail(true)
                    }else{
                        setEmail(false)
                    }
                    
                }} />

            <p className={ !password ? 'sign-pass-placeholder' : 'sign-pass-placeholderOn'}>Password</p>
            <input className="signup-password" type="password" onFocus={()=>{
                    setPassword(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setPassword(true)
                    }else{
                        setPassword(false)
                    }
                    
                }} />

            <button className='logIn'>SignUp</button>
        </div>
    );
}
export default AuthSignUpForm;