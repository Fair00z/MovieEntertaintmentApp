import React, { createContext, useReducer, useState } from 'react'
import './menu.css'
import MenuSlide from './menuSlide';


const stateContext = createContext();

function Menu(){
    const [show,setShow] = useState(false)
    const [hover,setHover] = useState('')
    const [slideHover,setSlideHover] = useState('')

    function EnterSlide(){
        setShow(true)
    }
    function LeaveSlide(){
        setShow(false)
    }
    return(
        <stateContext.Provider value={[setShow,setSlideHover]}>
            <div className='menuContainer'>
                <div className="menu" onMouseEnter={EnterSlide} onMouseLeave={LeaveSlide}>
                    <div>
                        <i onMouseEnter={()=>{
                            setHover('search')
                        }} onMouseLeave={()=>{
                            setHover('')
                        }} 
                        className={slideHover=='search'?'menuSlideHover fa-solid fa-magnifying-glass ':'fa-solid fa-magnifying-glass menu-icon'}></i>
                    </div>
                    <div>
                        <i onMouseEnter={()=>{
                            setHover('home')
                        }} onMouseLeave={()=>{
                            setHover('')
                        }}
                        className={slideHover=='home'?'menuSlideHover fa-solid fa-house ':'fa-solid fa-house'}></i>
                    </div>
                    <div>
                        <i onMouseEnter={()=>{
                            setHover('tv')
                        }} onMouseLeave={()=>{
                            setHover('')
                        }}
                        className={slideHover=='tv'?'menuSlideHover fa-solid fa-tv':'fa-solid fa-tv'}></i>
                    </div>
                    <div>
                        <i  onMouseEnter={()=>{
                            setHover('movies')
                        }} onMouseLeave={()=>{
                            setHover('')
                        }}
                        className={slideHover=='movies'?'menuSlideHover fa-solid fa-film ':'fa-solid fa-film '}></i>
                    </div>
                    <div>
                        <i  onMouseEnter={()=>{
                            setHover('sports')
                        }} onMouseLeave={()=>{
                            setHover('')
                        }}
                        className={slideHover=='sports'?'menuSlideHover fa-solid fa-volleyball ':'fa-solid fa-volleyball '}></i>
                    </div>
                    <div>
                        <i  onMouseEnter={()=>{
                            setHover('categories')
                        }} onMouseLeave={()=>{
                            setHover('')
                        }}
                        className={slideHover=='categories'?'menuSlideHover fa-solid fa-icons ':'fa-solid fa-icons '}></i>
                    </div>
                </div>
                { show ? <MenuSlide hoverElement={hover} /> : null}
            </div>
        </stateContext.Provider>
    );
}
export default Menu;
export{
    stateContext
}