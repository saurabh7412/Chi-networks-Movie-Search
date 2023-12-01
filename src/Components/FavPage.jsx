import React, { useState } from 'react'
import FavMovieCard from './FavMovieCard';

const FavPage = () => {

    {/* to map all movies addded to favourites.. */ }

    const favArr = JSON.parse(localStorage.getItem("Favourites")) || [];

    const [flag,setFlag] = useState(false);

    
  return (
    <div>
        {favArr.length == 0 && <h1>No Favourites Added !</h1>}

        {
            favArr.length > 0 && 
            <div className='Movies'>
                {
                    favArr.map((ele,ind)=>(
                        <FavMovieCard key={ind} {...ele} setFlag = {setFlag}/>
                    ))
                }
                
            </div>
        }

    </div>
  )
}

export default FavPage