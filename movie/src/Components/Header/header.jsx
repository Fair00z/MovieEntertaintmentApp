import React from 'react'
import './header.css'

function Header(props){
    const{login,newbie}=props;
    return (
        <nav>
            <p className='logoName'>ReactEntertains</p>
            <div className='buttonDiv'>
                { newbie ? <button className='signUp'>Newbie</button>:null}
                { login ? <button className='logIn'><i class="fa-solid fa-user"></i>Login</button>:null}
            </div>
        </nav>
    )
}
export default Header;