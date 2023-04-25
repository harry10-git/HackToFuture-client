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
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>

        <input
          type="file"
          name=""
          id=""
          onChange={(e) => setFile(e.target.files[0])}
        />
        {/* buttons */}
        <button className="bg-slate-300 p-2 rounded-lg m-2">
          save as draft
        </button>
        <button
          className="bg-slate-300 p-2 rounded-lg m-2"
          onClick={handleClick}
        >
          Publish
        </button>

        <input
          type="radio"
          name="cat"
          checked={cat === "art"}
          value="art"
          id="art"
          onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="art">Art</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "science"}
          value="science"
          id="science"
          onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="science">science</label>

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
        <label htmlFor="cinema">Cinema</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "design"}
          value="design"
          id="design"
          onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="design">Design</label>

        <input
          type="radio"
          name="cat"
          checked={cat === "food"}
          value="design"
          id="design"
          onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="design">Food</label>
      </div>
    </div>
  );
};

export default Write;
