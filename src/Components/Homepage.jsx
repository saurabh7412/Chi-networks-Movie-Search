import React from 'react'

import homeimage from "../images/Horror movie-amico.png"

const Homepage = () => {
  return (
    <div className='homepage'>
        <h1>Welcome to Movie Search </h1>

        <img src={homeimage} style={{width:"40%"}} alt='home image'/>
    </div>
  )
}

export default Homepage