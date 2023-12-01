import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";
import logo from "../images/logi1.png";
import { toast } from "sonner";

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);

  //  Logout functionality

  const handleLogout = () => {
    logout();
    localStorage.removeItem("isAuth");

    toast.success("Logged Out Successfully !");
    navigate("/login-signup");
  };

  //  To toggle the visibility of Hamburger icon

  const handleVisible = (e) => {
    e.stopPropagation();
    setDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <Link to={"/searchMovies"} className="l1">
          Search Movies
        </Link>
        <Link to={"/Favourites"} className="l2">
          Favourites
        </Link>
        {!auth && (
          <Link to={"/login-signup"} className="l2">
            Login/Signup
          </Link>
        )}
        {auth && (
          <button className="logoutbtn" onClick={handleLogout}>
            Logout
          </button>
        )}
        <button className="ham" onClick={handleVisible}>
          =
        </button>
      </div>

      {/* visibile only for small screen */ }

      {isDropdownVisible && (
        <div id="dropdown" ref={dropdownRef}>
          <Link to={"/searchMovies"}>Search Movies</Link>
          <Link to={"/Favourites"}>Favourites</Link>
          {!auth && <Link to={"/login-signup"}>Login/Signup</Link>}
          {auth && (
            <button className="logoutbtn1" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
