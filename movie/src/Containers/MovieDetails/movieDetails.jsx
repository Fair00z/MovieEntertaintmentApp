import React, { useContext, useEffect, useState } from "react";
import './movieDetails.css'
import MovieImage from "../../Components/MovieImage/movieimage";
import Header from "../../Components/Header/header";
import Menu from "../../Components/Menu/menu";
import { MovieDetailContext } from "../../Store/moviedetails";
import axios from "axios";
import { API_KEY } from "../../Constants/constants";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Store/firebaseContext";
import { db } from "../../Firebase/config";
import { doc, setDoc } from "firebase/firestore";


function MovieDetails(){
    // const {movieId} = useContext(MovieDetailContext)
    const {movieId}=useParams()
    const [movie,setMovie]=useState([])
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

        setDoc(doc(db,'wishlist',movieId),{
            movie_name:movie.original_title,
            user_id:user_uid,
            poster_path:movie.poster_path,
            added_date:currentTime+' '+currentDate
        })
        navigate('/wishlist')

    }

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`).then((response)=>{
            setMovie(response.data)
        }).catch((error)=>{
            console.log(error);
            navigate('/')
        })
    },[movieId])
    return (
        <div>
            <Header login newbie/>
            <Menu/>
            <MovieImage url={movie.backdrop_path} />
            <div className="movie-content">
                <h1>{movie.original_title}</h1>
                <div className="dateAndContry">
                    <p className="first_air_date">{movie.release_date}</p>
                    <p className="contry-language">[{movie.origin_country}] [{movie.original_language}]</p>
                </div>
                <p className="Adult-Rate">Adult Rated: <span>{movie.adult == true? "True":"False"}</span></p>
                <p className="movie-overview">{movie.overview}</p>
                {movie.genres ? movie.genres.map((obj)=>{
                    return (
                        <p className='movie-genres'> {obj.name} <span style={{color:'rgb(0, 204, 255)'}}>|</span></p>
                    )
                }):null}
            </div>
            <div className='details-button-div'>
                <button className='play-button'><i class="fa-solid fa-play"></i>Watch Now</button>
                <button className='wish-button' onClick={handleWishList} ><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    );
}
export default MovieDetails;