import React, { useState } from "react";
import './authsignupform.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Auth, db } from "../../Firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AuthSignUpForm(){
    const[fname,setFname]=useState(false)
    const[lname,setLname]=useState(false)
    const[username,setUsername]=useState(false)
    const[email,setEmail]=useState(false)
    const[password,setPassword]=useState(false)
    const[userfname,setUserFname]=useState('')
    const[userlname,setUserLname]=useState('')
    const[userusername,setUserUsername]=useState('')
    const[useremail,setUserEmail]=useState('')
    const[userpassword,setUserPassword]=useState('')
    const navigate = useNavigate()
    const handleSignup = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(Auth,useremail,userpassword).then((result)=>{
            updateProfile(result.user,{
                displayName:userusername
            }).then(()=>{
                setDoc(doc(db,'users',result.user.uid),{
                    firstName:userfname,
                    lastName:userlname,
                    uid:result.user.uid,
                    email:result.user.email,
                    username:result.user.displayName
                }).then(()=>{
                    navigate('/')
                })
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className="signup-outer-box">
            <h2 className="sign-title">React</h2>
            <form onSubmit={handleSignup}>
            <p className={ !fname ? 'fname-placeholder' : 'fname-placeholderOn'}>First Name</p>
            <input className="fname" type="text" onFocus={()=>{
                    setFname(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setFname(true)
                    }else{
                        setFname(false)
                    }
                    
                }} onChange={(e)=>{
                    setUserFname(e.target.value)
                }} 
                value={userfname} />

            <p className={ !lname ? 'lname-placeholder' : 'lname-placeholderOn'}>Last Name</p>
            <input className="lname" type="text" onFocus={()=>{
                    setLname(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setLname(true)
                    }else{
                        setLname(false)
                    }
                    
                }} onChange={(e)=>{
                    setUserLname(e.target.value)
                }} 
                value={userlname} />

            <p className={ !username ? 'sign-user-placeholder' : 'sign-user-placeholderOn'}>Username</p>
            <input className="signup-username" type="text" onFocus={()=>{
                    setUsername(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setUsername(true)
                    }else{
                        setUsername(false)
                    }
                    
                }} onChange={(e)=>{
                    setUserUsername(e.target.value)
                }} 
                value={userusername} />

            <p className={ !email ? 'email-placeholder' : 'email-placeholderOn'}>Email</p>
            <input className="email" type="email" onFocus={()=>{
                    setEmail(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setEmail(true)
                    }else{
                        setEmail(false)
                    }
                    
                }} onChange={(e)=>{
                    setUserEmail(e.target.value)
                }} 
                value={useremail} />

            <p className={ !password ? 'sign-pass-placeholder' : 'sign-pass-placeholderOn'}>Password</p>
            <input className="signup-password" type="password" onFocus={()=>{
                    setPassword(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setPassword(true)
                    }else{
                        setPassword(false)
                    }
                    
                }} onChange={(e)=>{
                    setUserPassword(e.target.value)
                }} 
                value={userpassword} />

            <button type="submit" className='logIn'>SignUp</button>
            </form>
        </div>
    );
}
export default AuthSignUpForm;