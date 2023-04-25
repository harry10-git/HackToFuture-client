import React, { useState } from "react";
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
          checked={cat === "art"}
          value="art"
          id="art"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="art">Art</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "science"}
          value="science"
          id="science"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="science">science</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "technology"}
          value="technology"
          id="technology"
          onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="technology">Technology</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "cinema"}
          value="cinema"
          id="cinema"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="cinema">Cinema</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "design"}
          value="design"
          id="design"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="design">Design</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "food"}
          value="design"
          id="design"
          onChange={(e) => setCat(e.target.value)}
        />
        <label className="mr-2" htmlFor="design">Food</label>


         {/* buttons */}
         <button className="bg-slate-300 p-2 rounded-lg m-2 hover:bg-orange-500 hover:text-white">
          save as draft
        </button>
        <button
          className="bg-slate-300 p-2 rounded-lg m-2 hover:bg-orange-500 hover:text-white"
          onClick={handleClick}
        >
          Publish
        </button>

        </div>
      </div>
    </div>
  );
};

export default Write;
