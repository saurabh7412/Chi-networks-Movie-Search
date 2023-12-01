import React, { useEffect, useState } from 'react'
import {toast} from "sonner";


const FavMovieCard = ({Title,Poster,Type,Year,imdbID, setFlag}) => {

    const [favData,setFavData] = useState(JSON.parse(localStorage.getItem("Favourites")) || []);

    useEffect(()=>{

        setFlag((p)=>!p)

    },[favData])


    {/* to delete movies data from local storage */ }



    const handleDelete =(title)=>{
        console.log(title);

        const filteredArr = favData.filter((el,ind)=> el.Title != title)

        localStorage.setItem("Favourites", JSON.stringify(filteredArr));

        setFavData(filteredArr);


        toast.success("Removed from Favourites !")

    }


  return (
    <div className='movieCard'>
        <div><img src={Poster} style={{width:"50%"}} alt='movie'/></div>
        <h2><span>Title : </span>{Title}</h2>
        <h2><span>Type : </span>{Type}</h2>
        <h2><span>Year : </span>{Year}</h2>

        <button onClick={()=>handleDelete(Title)} style={{color:"Red"}}>Remove from Favourites</button>
    </div>
  )
}

export default FavMovieCard