import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginSignup = () => {

    const [isLogin, setLogin] = useState(true);

    {/* rendering login and signup pages as per authentication  */ }

  return (
    <div className='Loginsignup'>
      <div className='head'>
        <div className='logindiv' onClick={()=>setLogin(true)}>
          Login
        </div>
        <div className='signupdiv' onClick={()=>{ setLogin(false)}}>Signup</div>
      </div>

      {isLogin ? (
        <LoginForm setLogin = {setLogin}/>
      ) : (
        <SignupForm setLogin = {setLogin}/>
      )}
    </div>
  );
  
}

export default LoginSignup 