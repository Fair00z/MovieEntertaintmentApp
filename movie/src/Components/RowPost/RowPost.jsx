import React, { useEffect, useState } from "react";
import axios from '../../Constants/axios';
import './RowPost.css'
import { imageUrl } from "../../Constants/constants";

function RowPost(props){
    const[movie,setMovie]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovie(response.data.results)
            console.log(response.data.results)
        })
    },[])
    return(
        <div className="rowpost">
            <h3 className="row-title">{props.title}</h3>
            <div className="poster-box">
                { movie.map((obj)=>{
                    return (
                        <img className={props.class} src={imageUrl+obj.backdrop_path} />
                    );
                })
                    
                    }
            </div>
        </div>
    );
}
export default RowPost;