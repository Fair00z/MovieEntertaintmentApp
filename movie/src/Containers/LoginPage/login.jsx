import React from "react";
import Header from "../../Components/Header/header";
import './login.css'
import AuthLoginForm from "../../Components/authForm/authloginform";

function Login(){
    return(
        <div className="background">
            <Header newbie />
            <AuthLoginForm/>
        </div>
    );
}
export default Login;