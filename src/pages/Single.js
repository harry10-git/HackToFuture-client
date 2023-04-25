import React, { useContext, useEffect, useState } from "react";
// import harry from "../img/harry.jpeg";
import { BsPenFill, BsXOctagonFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import Menu from "../components/Menu";
import { BsPencil } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Single = () => {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const [post, setPost] = useState({});

  const location = useLocation();

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
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 h-screen ">
        <div className="justify-center col-span-2 ">
          <div className="grid grid-cols-3">
            <div>
              {/* Image */}
              <div class="max-w-[400px] bg-orange-400 border border-orange-600 rounded-3xl ml-20 mt-20 p-2">
                <img
                  class="rounded-3xl hover:shadow-5xl duration-300"
                  src={`../upload/${post?.img}`}
                  alt=""
                />
              </div>

              {/* Other Details */}
              <div className="ml-20 mt-5">
                <div className="p-3">
                  <p className="m-2">
                    <span className="text-lg text-bold">Owner:</span>{" "}
                    <span className="text-bold text-orange-600">
                      {post.username}
                    </span>
                  </p>
                  <p className="m-2">
                    <span className="text-lg text-bold">Posted on:</span>{" "}
                    <span className="text-bold text-orange-600">
                      {moment(post.date).fromNow()}
                    </span>
                  </p>
                </div>
                <div className="ml-4">
                  <div className="">
                    {currentUser.username === post.username && (
                      <div>
                        <Link to={`/write?edit=2`} state={post}>
                          <span className=" text-3xl text-orange-500 mb-5">
                            <BsPencil />
                          </span>
                        </Link>
                        <span className=" text-3xl" onClick={handleDelete}>
                          <MdDelete />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="col-span-2 m-auto text-xl">
              <p className="p-10 m-auto">{getText(post.desc)}</p>
            </div>
          </div>
        </div>
        {/* Side */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll bg-gray-100 ">
            <Menu cat={post.cat} />
          </div>
        </div>
      </div>
    </div>

    // <div>
    // <div className="flex justify-center items-center pt-9">
    //   <div className="single grid grid-cols-3">
    //     <div className="content col-span-2">
    //       <img
    //         className="h-[300px]"
    //         src={`../upload/${post?.img}`}
    //         alt="no img"
    //       />

    //       {post.userImg && <img
    //         className="h-[100px] rounded-full mt-5"
    //         src={post.userImg}
    //         alt=""
    //       />}

    //       <p>{post.username}</p>
    //       <p>posted {moment(post.date).fromNow()} </p>

    //    {currentUser.username ===post.username && (
    //     <div><Link to={`/write?edit=2`} state={post} >
    //         <span className=" text-2xl">
    //           <BsPenFill />
    //         </span>
    //       </Link>
    //       <span className=" text-2xl" onClick={handleDelete}>
    //         <BsXOctagonFill />
    //       </span></div>)}

    //     </div>

    //     <div className="col-span-1 ml-10 text-green-500">
    //       {/* other posts you may like */}
    //       <h1 className="font-bold ">{post.title}</h1>
    //     <p>{post.desc}</p>
    //     </div>
    //   </div>

    // </div>

    //    {/* suggestions  */}
    //   <div className="">

    //         <Menu cat={post.cat}/>

    //     </div>
    // </div>
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
