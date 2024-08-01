import React, { useContext, useEffect, useState } from 'react'
import './banner.css'
import axios from '../../Constants/axios';
import { API_KEY, imageUrl } from '../../Constants/constants';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { AuthContext } from '../../Store/firebaseContext';
import { useNavigate } from 'react-router-dom';

function Banner(){
    
    const[movie,setMovie]=useState('')
    const[genres,setGenres]=useState([])
    const[refresh,setRefresh]=useState(0)
    const[movieId,setMovieId]=useState('')
    const navigate = useNavigate()
    const{user}=useContext(AuthContext)
    const user_uid = user.uid

    const handleWishList = ()=>{
        const today = new Date();

        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Months are zero-indexed
        const day = today.getDate();

        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const currentDate = `${year}-${month}-${day}`;
        const currentTime = `${hours}:${minutes}:${seconds}`;

        setDoc(doc(db,'wishlist',String(movieId)),{
            movie_name:movie.original_title,
            user_id:user_uid,
            poster_path:movie.poster_path,
            added_date:currentTime+' '+currentDate
        })
        navigate('/wishlist')
    }

    function handleRefresh(){
        setRefresh(refresh+1)
    }

    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[refresh])
            setMovieId(response.data.results[refresh].id)
            console.log(response.data.results[refresh])
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
                    <button onClick={handleWishList} className='wish-button'><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div className='banner-left-shadow'></div>
            <div className='banner-right-shadow'></div>
        </div>
    );
}
export default Banner;