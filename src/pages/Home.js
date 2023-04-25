import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import Hero from '../components/Hero';

const Home = () => {

  const [posts,setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: " ",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className=''>

    <Hero />

    <div className='posts'>

   {/* Dispaly Objects */}
   <div className='ml-10 mr-10 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10'>
    {posts.map((post)=> (
        <div className='border shadow-2xl rounded-lg hover:scale-105 duration-300'>
            <img className='w-full h-[250px] object-cover rounded-t-lg' src={`../upload/${post.img}`} alt='' />
            <div className='px-2 py-4'>
                <p className='font-bold text-2xl'>{post.title}</p>
                <p className='py-2 '> {post.desc.substring(0, 100) + "..."}</p>
                <p className='item-center text-center'>
                    <span ><button className= 'px-20 mt-5 bg-orange-600 border-orange-600 text-white p-1 hover:bg-gray-200 hover:text-orange-600 rounded-full'>Buy Now</button></span>
                </p>
            </div>
        </div>
    ))};
    </div>

      {/* {posts.map(post=>(
        <div className='post place-content-center justify-center items-center p-5 m-8 grid grid-cols-3 ml-[300px]' key={post.id}>
          
          

          <div className=' justify-center items-center py-4 col-span-1'>
          <img className='object-cover h-48 w-96' src={`../upload/${post.img}`} alt="" />
          </div>

          <div className='content max-w-[540px] text-center col-span-2'>
            <Link to={`/post/${post.id}`}>
              <h1 className='mb-5'>{post.title}</h1>
              <p>{getText(post.cat)}</p>
             
            </Link>
          </div>

          <button className='border-2 border-black hover:bg-blue-300'>Read more</button>
        </div>
      ))} */}

    </div>

    </div>
  )
}

export default Home