import React, { useState } from "react";
import './authloginform.css'

function AuthLoginForm(){
    const[userPlace,setUserPlace]=useState(false)
    const[passPlace,setPassPlace]=useState(false)
    return(
        <div className="outer-box">
            <h2 className="title">React</h2>
            <div>
                <p className={ !userPlace ? 'username-placeholder' : 'username-placeholderOn'}>username</p>
                <input type="text" className="username" onFocus={()=>{
                    setUserPlace(true)
                }} onBlur={(e)=>{
                    if (e.target.value){
                        setUserPlace(true)
                    }else{
                        setUserPlace(false)
                    }
                    
                }} />
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
                    
                }} />
            </div>
            <button className='logIn'>Login</button>
        </div>
    );
}
export default AuthLoginForm;