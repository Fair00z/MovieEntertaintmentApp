import React from 'react'
import './WishItem.css'
import { imageUrl } from '../../Constants/constants'

function WishItem(props) {
  return (
    <div className='wish-item'>
        <h3 className='wish-movie-id'>1</h3>
        <div className='wish-movie-image'>
            <img src={ imageUrl+props.poster_path} alt="image not found" />
        </div>
        <div className='wish-movie-name'>
            <h2>{props.title}</h2>
        </div>
        <div className='wish-movie-date'>
            <h3>{props.date}</h3>
        </div>
        <div className='wish-movie-buttons'>
            <button className='wish-movie-play-button'><i class="fa-solid fa-play"></i>Watch</button>
            <button className='wish-movie-remove-button'>Remove</button>
        </div>
    </div>
  )
}

export default WishItem