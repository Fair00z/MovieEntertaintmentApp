import React from "react";
import './movieimage.css'
import { imageUrl } from "../../Constants/constants";

function MovieImage(props){
    return (
        <div className="movieImageBox">
            <img src={ props.url ? imageUrl+props.url:"https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-71055.jpg?w=996&t=st=1721915331~exp=1721915931~hmac=69519fb4558ec92b29f76e7ea5590a93e48a30a87935836333704550485ea59f"} alt="sorry image not found" />
        </div>
    );
}
export default MovieImage;