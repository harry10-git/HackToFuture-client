import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({cat}) => {

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu items-center justify-center flex flex-col">
      <h3 className="py-2 text-xl font-sans text-orange-700 font-medium">Other posts you may like</h3>
      {posts.map((post) => (
        <div className='border shadow-2xl rounded-lg hover:scale-105 duration-300 object-cover w-[350px] h-auto p-10' key={post.id}>
          {/* <div className=' justify-center items-center py-4 col-span-1'> */}
          <img className='w-full h-[250px] object-contain rounded-t-lg' src={`../upload/${post.img}`} alt="" />
          {/* </div> */}
          
          <div className='px-2 py-2'>
          
          <div>
              <h1 className='font-bold text-2xl'>{post.title}</h1>
              <p className='py-2'>{getText(post.desc).substring(0,55)+'...'}</p>
          </div>

          <p className='item-center text-center'>
                    <span ><Link to={`/post/${post.id}`}><button className= 'px-20 mt-5 bg-orange-600 border-orange-600 text-white p-1 hover:bg-gray-200 hover:text-orange-600 rounded-full'>Buy Now</button></Link></span>
          </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Menu;