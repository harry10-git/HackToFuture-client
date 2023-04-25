import React, { useContext } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar flex max-w[1024px] justify-center">
      <div className="container flex py-[10p x] px-0 justify-between">
        <div className="logo">
        <Link to="/"> 
        <img
            className="object-contain h-32 w-32 "
            src={Logo}
            alt="not found"
          />
        </Link>
          
        </div>
        <div className="links">
          <Link className="px-4" to="/?cat=art">
            Art
          </Link>
          <Link className="px-4" to="/?cat=science">
            Science
          </Link>
          <Link className="px-4" to="/?cat=technology">
            Technology
          </Link>
          <Link className="px-4" to="/?cat=cinema">
            Cinema
          </Link>
          <Link className="px-4" to="/?cat=design">
            Design
          </Link>
          <Link className="px-4" to="/?cat=food ">
            Food
          </Link>
          <span className="px-4">{currentUser?.username}</span>
          {currentUser ? (
            <span className="px-4" onClick={logout}>Logout</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <span>
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
