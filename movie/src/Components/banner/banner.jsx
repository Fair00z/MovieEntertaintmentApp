import React from 'react'
import './banner.css'

function Banner(){
    return(
        <div>
            <div className='outerBox'>
            <img src="https://i.pinimg.com/564x/98/38/db/9838db11078d9a549342a7f54a8f7116.jpg"/>
            
            </div>
            <div className='banner-details'>
                <h1>Avengers</h1>
                <p className='movie-descreption'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, alias error odit eius aspernatur facilis quaerat sit laudantium atque consequuntur accusantium, debitis necessitatibus amet m</p>
                <p className='genres'>Action <span style={{color:'rgb(0, 204, 255)'}}>|</span> Fantesy <span style={{color:'rgb(0, 204, 255)'}}>|</span> Drama <span style={{color:'rgb(0, 204, 255)'}}>|</span> Romantic</p>
                <div className='button-div'>
                    <button className='play-button'><i class="fa-solid fa-play"></i>Watch Now</button>
                    <button className='wish-button'><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div className='banner-left-shadow'></div>
            <div className='banner-right-shadow'></div>
        </div>
    );
}
export default Banner;