import React from "react";
import './signup.css'
import Header from "../../Components/Header/header";
import AuthSignUpForm from "../../Components/authForm/authsignupform";

function SignUp(){
    return (
        <div className="background">
            <Header login />
            <AuthSignUpForm/>
        </div>
    );
}
export default SignUp;