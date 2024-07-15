import React, { useContext } from 'react'
import './menuSlide.css'
import { stateContext } from './menu'

function SlideMenu(){
    const [setShow] = useContext(stateContext)
    function EnterSlide(){
        setShow(true)
    }
    function LeaveSlide(){
        setShow(false)
    }
    return(
        <div>
            <div className="menuSlide" onMouseEnter={EnterSlide} onMouseLeave={LeaveSlide} >
                <div>
                    <p className=''>Search</p>
                </div>
                <div>
                    <p>Home</p>
                </div>
                <div>
                    <p>Tv</p>
                </div>
                <div>
                    <p>Movies</p>
                </div>
                <div>
                    <p>Sports</p>
                </div>
                <div>
                    <p>Categories</p>
                </div>
            </div>
        </div>
    );
}
export default SlideMenu;