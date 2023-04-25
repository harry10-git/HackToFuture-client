// import axios from "axios";
import React, { useState, Component } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";




const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="grid grid-cols-3 justify-center h-screen">
      {/* Logo */}
      <div className="col-span-2 text-right">
      <h1 className="text-7xl px-2 mt-[200px]">
        Manipal
      </h1>
      <h1 className="text-9xl px-2">
      <span className="font-bold text-orange-600 opacity-70">Mercantile</span>
      </h1>
      </div>

      {/* Login Form */}
      <div className="flex flex-col items-center justify-center bg-orange-600 opacity-60 p-5 rounded-lg text-center">
        <h1 className="text-5xl pb-8 text-white text-bold">Login</h1>

        <form action="">
          <input
            className="text-center bg-gray-200 rounded-full flex items-center py-1 w-[200px] sm:w-[400px] lg:w-[500] mb-5"
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            className="text-center bg-gray-200 rounded-full flex items-center py-1 w-[200px] sm:w-[400px] lg:w-[500] mb-10"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />

          <button className=" bg-white p-2 rounded-full px-4 text-orange-600 hover:bg-gray-600 mb-5" onClick={handleSubmit}>
            Login
          </button>
          {err && <p>{err}</p>}
          <p className="text-white">
            Don't you have a account? <Link to="/register"><span className="text-black opacity-100 hover:text-white">Register</span></Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
