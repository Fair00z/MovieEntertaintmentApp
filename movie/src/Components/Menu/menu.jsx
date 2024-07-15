import React, { createContext, useReducer, useState } from 'react'
import './menu.css'
import MenuSlide from './menuSlide';


const stateContext = createContext();

function Menu(){
    const [show,setShow] = useState(false)

    function EnterSlide(){
        setShow(true)
    }
    function LeaveSlide(){
        setShow(false)
    }
    return(
        <stateContext.Provider value={[setShow]}>
            <div className='menuContainer'>
                <div className="menu" onMouseEnter={EnterSlide} onMouseLeave={LeaveSlide}>
                    <div>
                        <i class="fa-solid fa-magnifying-glass menu-icon" ></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-tv"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-film"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-volleyball"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-icons"></i>
                    </div>
                </div>
                { show ? <MenuSlide from_child={[show,setShow]} /> : null}
            </div>
        </stateContext.Provider>
    );
}
export default Menu;
export{
    stateContext
}