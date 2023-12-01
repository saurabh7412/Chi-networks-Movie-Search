import React from 'react'
import { useNavigate } from 'react-router-dom'

import {toast} from "sonner";


const MovieCard = ({Title,Poster,Type,Year,imdbID}) => {
    const nav = useNavigate();

    
    {/* logic for viewing single page */ }

    const handleDetail =()=>{
        localStorage.setItem("singleMovieId",imdbID);
        nav('/movieDetail')
    }



    {/* logic for adding movies to favourites */}

    const handleFav = (title)=>{
      console.log(title);

      const favArr = JSON.parse(localStorage.getItem("Favourites")) || [];

      let filterFav = favArr.filter((el, ind) => el.Title == title);

    if (filterFav.length > 0) {
      toast.error("This is Already added to Favourites !")
    } else {
      favArr.push({
        Title : Title,
        Poster:Poster,
        Type : Type,
        Year : Year,
        imdbID : imdbID
      });

      localStorage.setItem("Favourites", JSON.stringify(favArr));

      toast.success("Added To Favourites !")
    }
    }


  return (
    <div className='movieCard'>
        <div><img style={{width:"50%"}} src={Poster} alt='movie'/></div>
        <h2><span>Title : </span>{Title}</h2>
        <h2><span>Type : </span>{Type}</h2>
        <h2><span>Year : </span>{Year}</h2>

        <div>
        <button onClick={handleDetail}>View Details</button>
        <button onClick={()=>handleFav(Title)}>Add to Favourite 💓 </button>
        </div>
    </div>
  )
}

export default MovieCard