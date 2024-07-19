import React from "react";
import Header from "../../Components/Header/header";
import './login.css'
import AuthForm from "../../Components/authForm/authform";

function Login(){
    return(
        <div className="background">
            <Header newbie />
            <AuthForm/>
        </div>
    );
}
export default Login;