import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../Constants/axios';
import { API_KEY, imageUrl } from '../../Constants/constants';

function Banner(){
    
    const[movie,setMovie]=useState('')
    const[genres,setGenres]=useState([])
    const[refresh,setRefresh]=useState(0)

    function handleRefresh(){
        setRefresh(refresh+1)
    }

    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[refresh])
        })
        
    },[refresh])
    // useEffect(()=>{
    //     { movie && movie.id ? axios.get(`movie/${movie.id}?api_key=${API_KEY}&language=en-US`).then((response)=>{
    //         setGenres(response.data)
    //     }):console.log('not');}
    // },[movie])
    useEffect(() => {
        if (movie) {
            axios.get(`movie/${movie.id}?api_key=${API_KEY}&language=en-US`).then((response) => {
                setGenres(response.data);
            }).catch(error => {
                console.error('Error fetching movie details:', error);
            });
        } else {
            console.log('Movie is not defined');
        }
    }, [movie]);
    
    // axios.get(`movie/${movie.id}?api_key=${API_KEY}&language=en-US`).then((response)=>{
    //     setGenres(response.data)
    // })

    useEffect(()=>{
        setTimeout(() => {
            handleRefresh();
        }, 10000);
    },[refresh])
    if(refresh==20){
        setRefresh(0)
    }
    
    return(
        <div>
            <div className='outerBox'>
            <img src={movie ? imageUrl+movie.backdrop_path:""}/>
            
            </div>
            <div className='banner-details'>
                <h1>{movie ? movie.title ? movie.title:movie.name:"..........."}</h1>
                <p className='movie-descreption'>{movie ? movie.overview:"........."}</p>
                <div className='genres-box'>
                { genres.genres && genres.genres.map(genre=>(
                    <p className='genres'> {genre.name} <span style={{color:'rgb(0, 204, 255)'}}>|</span></p>
                ))
                }
                </div>
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