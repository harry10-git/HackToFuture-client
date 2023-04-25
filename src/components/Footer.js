import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";
const Footer = () => {
  return (
    <div>
    <div className='max-w-[1640px] justify-center items-center p-2 px-5 flex bg-orange-600 mt-8 mb-0'>
    <button className='text-white border-orange-600 hover:text-gray-600 hover:scale-105 duration-300'><FaGithub size={25} className='mr-4'/> </button>
    <button className='text-white border-orange-600 hover:text-gray-600 hover:scale-105 duration-300'><FaInstagram size={25} className='mr-4'/> </button>
    <button className='text-white border-orange-600 hover:text-gray-600 hover:scale-105 duration-300'><FaLinkedin size={25} className='mr-4'/>   </button>
    </div>
    <p className='py-2 mb-4 text-white text-bold max-w-[1640px] flex justify-center items-center bg-orange-600'>Made by Harry & Triya</p>
    </div>
  )
}

export default Footer

// <span><AiOutlineHeart size={25} className='mr-4'/> </span>