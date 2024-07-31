import React, { useContext } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Store/firebaseContext';
import { signOut } from 'firebase/auth';
import { Auth } from '../../Firebase/config';

function Header(props){
    const{login,newbie}=props;
    const Navigate = useNavigate()
    const{user}=useContext(AuthContext)
    return (
        <nav>
            <p className='logoName'>ReactEntertains</p>
            <div className='buttonDiv'>
                { newbie ? <button className='signUp' onClick={()=>{
                    if(!user){
                        Navigate('/signup')
                    }else{
                        Navigate('/wishlist')
                    }
                }}>{ user ? user.displayName : "Newbie"}</button>:null}

                { !user ? login ? <button className='logIn' onClick={()=>{
                    Navigate('/login')
                }}><i class="fa-solid fa-user"></i>Login</button>:null:
                <button className='logIn' onClick={()=>{
                    signOut(Auth)
                    Navigate('/login')
                }}><i class="fa-solid fa-user"></i>LogOut</button>
                }
            </div>
        </nav>
    )
}
export default Header;