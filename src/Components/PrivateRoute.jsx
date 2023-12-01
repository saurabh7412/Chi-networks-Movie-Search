import React from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

const PrivateRoute = ({children}) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuth'));

    {/*  checking for private routes based on authentication */ }

    if(!isAuthenticated){

        toast.error("Login First !")
       return <Navigate to={'/login-signup'}/>
    }

  return (
    <div>{children}</div>
  )
}

export default PrivateRoute