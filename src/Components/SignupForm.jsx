import React, { useState } from 'react'
import { toast } from 'sonner';

import signuppic from "../images/Mobile login-rafiki.png";


const SignupForm = ({setLogin}) => {

    const [allusers, setAllusers] = useState(JSON.parse(localStorage.getItem("Allusers")) || []);
    

    let userData = {
        username : "",
        email:"",
        password : "",
        confirmpassword : ""
    };




    const handleChange =(e)=>{
        let {name, value} = e.target;

        userData[name] = value;
        
    }


    {/*  logic for registering new user  with all error handling and considering edge cases  */ }


    const handleSubmit =(e)=>{
        e.preventDefault();

        let lsdata = JSON.parse(localStorage.getItem("Allusers")) || [];

        

        let checkUser = lsdata.filter((el,ind)=> el.email == userData.email)

        if( !userData.username || !userData.email || !userData.password || !userData.confirmpassword){
            
            toast.error("Please fill all the Details !")
        }
        else if (checkUser.length > 0){
            

            toast.error("User Already Exist ! Register using new Email.")
        }
        else if (userData.password != userData.confirmpassword){
         
            toast.error("Password and confirm password should be same !")
        }else{


            allusers.push(userData)

            localStorage.setItem("Allusers", JSON.stringify(allusers));


            toast.success("User Registered Successfully !")

        }


    }




    return (<>

    <div>
    <img src={signuppic} style={{width:"40%"}} alt="login" />

    </div>
      <div>

        <form onSubmit={handleSubmit} className='form'>

        <div className='formfields'>
          <label>Name </label>
          <input type='text' placeholder='Name' name='username' onChange={handleChange}/>
        </div><br></br>

        <div className='formfields'>
          <label>Email </label>
          <input type='text' placeholder='Email' name='email' onChange={handleChange} />
        </div><br></br>

        <div className='formfields'>
          <label>Password </label>
          <input type='password' placeholder='Password' name='password' onChange={handleChange} />
        </div><br></br>

        <div className='formfields'>
          <label>Confirm Password </label>
          <input type='password' placeholder='Password' name='confirmpassword' onChange={handleChange} />
        </div><br></br>


        <div>
          <label>Already Registered ? Let's <span onClick={()=>setLogin(true)}><span className='spanlink'>Login</span></span></label>
        </div>
        
        <button type='submit'>Sign Up</button>
        
      </form>
      </div>
    </>
      );
}

export default SignupForm