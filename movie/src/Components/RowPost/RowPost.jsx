import React, { useContext, useEffect, useState } from "react";
import axios from '../../Constants/axios';
import './RowPost.css'
import { imageUrl } from "../../Constants/constants";
import { useNavigate } from "react-router-dom";
import { MovieDetailContext } from "../../Store/moviedetails";

function RowPost(props){
    const[movie,setMovie]=useState([])
    const Navigate = useNavigate()
    const {setMovieId}=useContext(MovieDetailContext)

    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovie(response.data.results)
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    return(
        <div className="rowpost">
            <h3 className="row-title">{props.title}</h3>
            <div className="poster-box">
                { movie.map((obj)=>{
                    return (
                        <img className={props.class} src={props.poster ? imageUrl+obj.poster_path :imageUrl+obj.backdrop_path } onClick={()=>{
                            Navigate(`/movie/${obj.id}`)
                            setMovieId(obj.id)
                        }} />
                    );
                })
                    
                    }
            </div>
        </div>
    );
}
export default RowPost;