import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { toast } from 'sonner';

const SearchMovies = () => {

    const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

    const [title, setTitle] = useState("");
    const [movieData, setMovieData] = useState([]);

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    const [genre,setGenre] = useState(null);
    const [year,setYear] = useState(null);

    const [order, setOrder] = useState(null);

    const currUser = localStorage.getItem("currUser");


    {/* To get data when component renders */ }

    useEffect(()=>{
        if(title){

            getMovie(url)
            
            setLoading(true)
        }
        
    },[genre,year])


    const getMovie =  (url)=>{
        axios.get(`${url}`,
        {
            params :{
               s: title,
               type : genre,
               y: year 
            }
        })
        .then((res)=>{
            setLoading(false)
            setError(false)
            console.log(res.data.Search);
            setMovieData(res.data.Search);
            // setTitle('')
        })
        .catch((err)=>{
            console.log(err);
            setError(true)
        })
    }
    
    {/* for search functionality */ }

    const handleSearch = ()=>{
        
        if(!title){
            toast.error("Enter a title first !")
            
        }
        else{
            
            getMovie(url)
            
        }



    }

    {/* for sorting functionality */ }

    const handleSort =(e)=>{
        setOrder(e.target.value)

        if(order == "asc"){
            
            let filteredArr = movieData.sort((a,b)=>+b.Year - +a.Year)
            
            
             setMovieData(filteredArr)
            
        }else{
            let filteredArr = movieData.sort((a,b)=>+a.Year - +b.Year)
            
         setMovieData(filteredArr)

        }

    }

  return (
    <div className='searchMovie'>
        <h1>
          Welcome ! <span style={{color: "darkgoldenrod"}}>{currUser.toUpperCase()}</span>. 
          Search Movies, Series, etc. here...
        </h1>

        <div>
            <input type='text' placeholder='Enter Movie name' onChange={(e)=>setTitle(e.target.value)} value={title}/><br/><br/>
            <button className='searchbtn' onClick={handleSearch}>Search</button>
        </div>

        <div className='x'>
            <h2>Fitler Movies </h2>


            <div className='filterdiv'>


            <div className='filterdiv1'>
            <label>Select Genre : </label>
                <select onChange={(e)=>setGenre(e.target.value)}>
                    <option value={""}>Select a Genre</option>
                    <option value={'movie'}>Movie</option>
                    <option value={'series'}>Series</option>
                    <option value={'game'}>Game</option>
                </select>
            </div>

            <div className='filterdiv2'>
                <label>Enter Release Year : </label>
                <input type='text' placeholder='Ex- 2012' onChange={(e)=>setYear(e.target.value)}/>
            </div>
            </div>
        </div>


        <div className='x'>
            <h2>Sort Movies </h2>


            <div className='filterdiv'>


            <div className='filterdiv1'>
            <label>Sort By Year : </label>
                <select onChange={handleSort}>
                    <option value={""}>Select Asc/Desc</option>
                    <option value={'asc'}>Ascending</option>
                    <option value={'desc'}>Descending</option>
                </select>
            </div>

            {/* <div className='filterdiv2'>
                <label>Enter Year : </label>
                <input type='text' placeholder='Enter Release year' onChange={(e)=>setYear(e.target.value)}/>
            </div> */}
            </div>
        </div>

        <div>
            {!loading && !error && movieData?.length == 0 &&<h1>Nothing to Show Yet...</h1>}
            {loading && <h1>Loading...</h1>}
            {error && <h1>Something Went Wrong...</h1>}

            {!movieData && <h1>No Such Data found !</h1>}

            {movieData &&<>
                <div>
                    {movieData.length > 0 && <h1>Resulted Data ...</h1>}
                </div>

            
            <div className='Movies'>

                {
                    movieData.map((ele,ind)=>(
                        <MovieCard key={ind} {...ele}/>
                    ))
                }
                
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default SearchMovies