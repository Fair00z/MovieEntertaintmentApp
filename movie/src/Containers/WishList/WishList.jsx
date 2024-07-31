import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Components/Header/header'
import Menu from '../../Components/Menu/menu'
import './WishList.css'
import WishItem from '../../Components/WishItem/WishItem'
import axios from 'axios'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase/config'
import { AuthContext } from '../../Store/firebaseContext'

function WishList() {
    const {user}=useContext(AuthContext)
    const [wishListData,setWishListData]=useState([])
    useEffect(()=>{
        getDocs(collection(db, "wishlist"))
        .then(querySnapshot => {
          const wishlist = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          console.log(wishlist);
          setWishListData(wishlist);
        })
    },[])
    const filteredDoc = wishListData.filter(data => data.user_id == user.uid)
    console.log(filteredDoc)
  return (
    <div>
        <Header newbie />
        <Menu/>
        <h3 className='wishlist-text'>Your Wish List</h3>
        <div className='wish-item-list'>
          {
            filteredDoc.map((obj)=>{
                return (
                    <WishItem title={obj.movie_name} poster_path={obj.poster_path} date={obj.added_date} />
                )
            })
          }
            
        </div>
    </div>
  )
}

export default WishList