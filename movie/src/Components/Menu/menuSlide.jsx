import React, { useContext } from 'react'
import './menuSlide.css'
import { stateContext } from './menu'

function SlideMenu(props){
    const [setShow,setSlideHover] = useContext(stateContext)
    const {hoverElement} = props;
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
                    <p
                     className={hoverElement=='search' ? 'menuSlideHover':''}
                     onMouseEnter={()=>{
                        setSlideHover('search')
                     }}
                     onMouseLeave={()=>{
                        setSlideHover('')
                     }}
                     >Search</p>
                </div>
                <div>
                    <p className={hoverElement=='home' ? 'menuSlideHover':''}
                    onMouseEnter={()=>{
                        setSlideHover('home')
                     }}
                     onMouseLeave={()=>{
                        setSlideHover('')
                     }}>Home</p>
                </div>
                <div>
                    <p className={hoverElement=='tv' ? 'menuSlideHover':''}
                    onMouseEnter={()=>{
                        setSlideHover('tv')
                     }}
                     onMouseLeave={()=>{
                        setSlideHover('')
                     }}>Tv</p>
                </div>
                <div>
                    <p className={hoverElement=='movies' ? 'menuSlideHover':''}
                    onMouseEnter={()=>{
                        setSlideHover('movies')
                     }}
                     onMouseLeave={()=>{
                        setSlideHover('')
                     }}>Movies</p>
                </div>
                <div>
                    <p className={hoverElement=='sports' ? 'menuSlideHover':''}
                    onMouseEnter={()=>{
                        setSlideHover('sports')
                     }}
                     onMouseLeave={()=>{
                        setSlideHover('')
                     }}>Sports</p>
                </div>
                <div>
                    <p className={hoverElement=='categories' ? 'menuSlideHover':''}
                    onMouseEnter={()=>{
                        setSlideHover('categories')
                     }}
                     onMouseLeave={()=>{
                        setSlideHover('')
                     }}>Wish List</p>
                </div>
            </div>
        </div>
    );
}
export default SlideMenu;