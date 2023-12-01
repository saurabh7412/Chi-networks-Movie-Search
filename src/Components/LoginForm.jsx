import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";
import { toast } from "sonner";

import loginpic from "../images/Login-bro.png";

const LoginForm = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allusers, setAllusers] = useState(
    JSON.parse(localStorage.getItem("Allusers")) || []
  );

  const { auth, login } = useContext(AuthContext);

  console.log("Auth", auth);

  const navigate = useNavigate();


  {/*  logic for submitting form  */ }

  const handleSubmit = (e) => {
    e.preventDefault();

    const logindata = {};

    logindata.email = email;

    logindata.password = password;

    let checkUser = allusers.filter(
      (el, ind) => el.email == email && el.password == password
    );

    // error handling before submitting the form

    if (!email || !password) {
      toast.error("Please fill all the Details !");
    } else if (checkUser.length == 0) {
      toast.error("Wrong Credentials !");
    } else {
      toast.success("Login Successful !");
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("currUser", checkUser[0].username);
      login();

      

      // navigating to movies search page after successful login

      navigate("/searchMovies");
    }

  };
  return (
    <>

    <div>

    <img src={loginpic} style={{width:"50%"}} alt="login" />

    </div>


    <div>


    <form onSubmit={handleSubmit} className="form">
      <div className="formfields">
        <label>Email </label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br></br>

      <div className="formfields">
        <label>Password </label>
        <input
          type="password"
          placeholder="Password"
          name="email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br></br>

      <div>
        <label>
          First time user ? Let's{" "}
          <span onClick={() => setLogin(false)}>
            <span className="spanlink">Signup</span>
          </span>
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
    </div>
    </>
  );
};

export default LoginForm;
