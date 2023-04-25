import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const imgUrl = await upload();

    // uploading file in server
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
          });
    } catch (err) {}
  };

  return (
    <div>
      <div className="mt-5 w-[70%] justify-center items-center mx-auto">
        <input
          className="p-2 border mb-5"
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="">
          <ReactQuill className="h-[400px]" theme="snow" value={value} onChange={setValue} />
        </div>


        <div className="mt-16">
        <input
          type="file"
          name=""
          id="id"
          onChange={(e) => setFile(e.target.files[0])}
        />
       

        <input
          type="radio"
          name="cat"
          checked={cat === "books"}
          value="books"
          id="books"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="books">Books</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "stationary"}
          value="stationary"
          id="stationary"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="stationary">Stationary</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "electrical"}
          value="electrical"
          id="electrical"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="electrical">Electrical</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "vehicle"}
          value="vehicle"
          id="vehicle"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="vehicle">vehicle</label>

        

         {/* buttons */}
         <button className="bg-slate-300 p-2 rounded-lg m-2 hover:bg-orange-500 hover:text-white">
          save as draft
        </button>
        <button
          className="bg-slate-300 p-2 rounded-lg m-2 hover:bg-orange-500 hover:text-white"
          onClick={handleClick}
        >
          <Link to='/'>Publish</Link>
        </button>

        </div>
      </div>
    </div>
  );
};

export default Write;
