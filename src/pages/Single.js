import React, { useContext, useEffect, useState } from "react";
// import harry from "../img/harry.jpeg";
import { BsPenFill, BsXOctagonFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import {AuthContext} from "../context/authContext"
import Menu from "../components/Menu";


const Single = () => {

  const [post,setPost] = useState({});

  const location = useLocation()
  
  const navigate = useNavigate();

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

  // Delete function
  const handleDelete = async ()=>{
    try {
      const res = await axios.delete(`/posts/${postId}`);
      navigate("/");

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
    <div className="flex justify-center items-center pt-9">
      <div className="single grid grid-cols-3">
        <div className="content col-span-2">
          <img
            className="h-[300px]"
            src={`../upload/${post?.img}`}
            alt="no img"
          />

          {post.userImg && <img
            className="h-[100px] rounded-full mt-5"
            src={post.userImg}
            alt=""
          />}

          <p>{post.username}</p>
          <p>posted {moment(post.date).fromNow()} </p>


       {currentUser.username ===post.username && (
        <div><Link to={`/write?edit=2`} state={post} >
            <span className=" text-2xl">
              <BsPenFill />
            </span>
          </Link>
          <span className=" text-2xl" onClick={handleDelete}>
            <BsXOctagonFill />
          </span></div>)}

        </div>

        <div className="col-span-1 ml-10 text-green-500">
          {/* other posts you may like */}
          <h1 className="font-bold ">{post.title}</h1>
        <p>{post.desc}</p>
        </div>
      </div>

      
    </div>


       {/* suggestions  */} 
      <div className="">
            
            <Menu cat={post.cat}/>
      
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
