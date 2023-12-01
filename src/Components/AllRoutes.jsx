import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import SearchMovies from './SearchMovies'
import PrivateRoute from './PrivateRoute'
import LoginSignup from './LoginSignup'
import SingleMoviePage from './SingleMoviePage'
import FavPage from './FavPage'

const AllRoutes = () => {
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/searchMovies' element={<PrivateRoute><SearchMovies/></PrivateRoute>}/>
            <Route path='/login-signup' element={<LoginSignup/>}/>
            <Route path='/movieDetail' element={<SingleMoviePage/>}/>
            <Route path='/Favourites' element={<PrivateRoute><FavPage/></PrivateRoute>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes