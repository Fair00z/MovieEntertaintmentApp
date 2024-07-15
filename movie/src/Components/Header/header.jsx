import React from 'react'
import './header.css'

function Header(){
    return (
        <nav>
            <p className='logoName'>ReactEntertains</p>
            <div className='buttonDiv'>
                <button className='signUp'>Newbie</button>
                <button className='logIn'><i class="fa-solid fa-user"></i>Login</button>
            </div>
        </nav>
    )
}
export default Header;