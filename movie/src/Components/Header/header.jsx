import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom';

function Header(props){
    const{login,newbie}=props;
    const Navigate = useNavigate()
    return (
        <nav>
            <p className='logoName'>ReactEntertains</p>
            <div className='buttonDiv'>
                { newbie ? <button className='signUp' onClick={()=>{
                    Navigate('/signup')
                }}>Newbie</button>:null}
                { login ? <button className='logIn' onClick={()=>{
                    Navigate('/login')
                }}><i class="fa-solid fa-user"></i>Login</button>:null}
            </div>
        </nav>
    )
}
export default Header;