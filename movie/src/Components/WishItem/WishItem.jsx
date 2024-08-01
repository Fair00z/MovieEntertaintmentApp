import React, { useState } from 'react'
import './WishItem.css'
import { imageUrl } from '../../Constants/constants'
import { db } from '../../Firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';

function WishItem(props) {
    const [val,setVal]=useState(0)

    async function deleteDocument(collectionName, documentId) {
        try {
          const docRef = doc(db, collectionName, documentId);
          await deleteDoc(docRef);
          console.log("Document successfully deleted!");
        } catch (error) {
          console.error("Error removing document: ", error);
        }
      }

  return (
    <div className='wish-item'>
        <h3 className='wish-movie-id'>{props.no}</h3>
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
            <button value={val} className='wish-movie-remove-button' onClick={(e)=>{
                setVal(val+1)
                const now = new Date();
                const doc_id = props.doc_id
                deleteDocument("wishlist", doc_id);
                setTimeout(()=>{
                    props.removeClick(now)

                },1000)
            }}>Remove</button>
        </div>
    </div>
  )
}

export default WishItem