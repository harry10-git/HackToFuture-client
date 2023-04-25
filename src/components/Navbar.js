import React, { useContext, useState } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import Avatar from '../img/avatar.png'




const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      
      {/* categories */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>

      <div className="container flex py-[10px] justify-between">
        <div className="logo">
          <Link to="/">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
              Manipal{" "}
              <span className="font-bold text-orange-600">Mercantile</span>
            </h1>
          </Link>
        </div>
        <div className="">
          <div className="justify-between flex flex-wrap">
            <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-1 px-2 border border-orange-600 hover:border-transparent rounded-2xl mx-2">
              <Link className="px-4" to="/">
                All
              </Link>
            </button>

            <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-1 px-2 border border-orange-600 hover:border-transparent rounded-2xl mx-2">
              <Link className="px-4" to="/?cat=books">
                Books
              </Link>
            </button>

            <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-1 px-2 border border-orange-600 hover:border-transparent rounded-2xl mx-2">
              <Link className="px-4" to="/?cat=stationary">
                Stationary
              </Link>
            </button>

            <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-1 px-2 border border-orange-600 hover:border-transparent rounded-2xl mx-2">
              <Link className="px-4" to="/?cat=electricals">
                Electricals
              </Link>
            </button>

            <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-1 px-2 border border-orange-600 hover:border-transparent rounded-2xl mx-2">
              <Link className="px-4" to="/?cat=art">
                Vehicles
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <h2 className="text-2xl p-4">
          Manipal <span className="font-bold">Mercantile</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">

            <li className="flex justify-center mb-5">
            <img className="h-[150px]" src={Avatar} alt="" />
            </li>

            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> <span className="px-4">{currentUser?.username}</span>{" "}
            </li>

            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> {currentUser ? (
            <span className="px-4" onClick={logout}>
            <Link to="/login">Logout</Link>
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}{" "}
            </li>

            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> <span>
            <Link to="/write">Write</Link>
          </span>{" "}
            </li>

            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help{" "}
            </li>

            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions{" "}
            </li>

            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones{" "}
            </li>

            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <span className="px-4">{currentUser?.username}</span>
          {currentUser ? (
            <span className="px-4" onClick={logout}>
              Logout
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <span>
            <Link to="/write">Write</Link>
          </span> */
}
