import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from 'sonner';

const SingleMoviePage = () => {
  const id = localStorage.getItem("singleMovieId");

  

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`;

  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const [singleData, setSingleData] = useState(null);



  {/* to get single mmovie data on when page renders */ }

  useEffect(() => {
    setLoad(true);

    getSingleMovie(url);
  }, []);

  const getSingleMovie = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setSingleData(res.data);
        setLoad(false);
        setErr(false);
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
      });
  };


  {/* Adding movies to favourites */ }

  const handleFav = () => {

    const favArr = JSON.parse(localStorage.getItem("Favourites")) || [];

    let filterFav = favArr.filter((el, ind) => el.Title == singleData.Title);

    if (filterFav.length > 0) {
     
      toast.error("This is Already added to Favourites !")

    } else {
      favArr.push(singleData);

      localStorage.setItem("Favourites", JSON.stringify(favArr));

      toast.success('Added To Favourites !')
    }
  };

  return (
    <div>
      {load && <h1>Loading...</h1>}
      {err && <h1>Something Went Wrong...</h1>}
      {singleData && (
        <div className="singleMovieCard">
          <div>
            <img src={singleData.Poster} alt="movie" />
          </div>

          <div>
            <h2>
              <span>Title : </span>
              {singleData.Title}
            </h2>
            <h2>
              <span>Type : </span>
              {singleData.Type}
            </h2>
            <h2>
              <span>Year : </span>
              {singleData.Year}
            </h2>

            <button onClick={handleFav}>Add to Favourite 💓 </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMoviePage;
