import React, { createContext, useState } from 'react'

export const AuthContext = createContext();



const AuthContextProvider = ({children}) => {


  {/* seperate component to create context */ }

  
    const [auth,setAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

    const login =()=>{
        setAuth(true);
    }

    const logout =()=>{
        setAuth(false)
    }


  return (
    <AuthContext.Provider value={{auth, login, logout}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider