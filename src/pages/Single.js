import React, { useContext, useEffect, useState } from "react";
// import harry from "../img/harry.jpeg";
import { BsPenFill, BsXOctagonFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import moment from 'moment';
import {AuthContext} from "../context/authContext"


const Single = () => {

  const [post,setPost] = useState({});

  // const navigate = useNavigate();

  const location = useLocation()

  const postId = location.pathname.split("/")[2]; 

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div>
    <div className="flex justify-center items-center pt-9">
      <div className="single grid grid-cols-3">
        <div className="content col-span-2">
          <img
            className="h-[300px]"
            src={post?.img}
            alt="no img"
          />

          <img
            className="h-[100px] rounded-full mt-5"
            src={post.userImg}
            alt="harry"
          />

          <p>{post.title}</p>
          <p>posted 2 days ago </p>
       <Link to={`/write?edit=2`}>
            <span className=" text-2xl">
              <BsPenFill />
            </span>
          </Link>
          <span className=" text-2xl">
            <BsXOctagonFill />
          </span>
        </div>

        <div className="col-span-1 ml-10 text-green-500">
          other posts you may like
        </div>
      </div>

      
    </div>

      <div className="grid grid-cols-3">

      <div className="col-span-2 items-center justify-center text-left p-10 flex flex-col">
      <h1 className="font-bold ">{post.title}</h1>
        <p>{post.desc}</p>
      
      </div>
        </div>
    </div>
  );
};

export default Single;

{
  /* <div className='content grid grid-cols-3'>

<img className='h-[300px]' src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="no img" />

<img className='rounded-full' src={harry} alt="harry" />

<div className=''>
  <span>John</span>
  <span>posted 2 days ago</span>
</div>
</div>

<div className='menu flex-2'>

</div> */
}
