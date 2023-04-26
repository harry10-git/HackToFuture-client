import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import "@lottiefiles/lottie-player";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // console.log(inputs);

  return (
    <div className="grid grid-cols-3 justify-center h-screen">
    
    {/* Logo */}
    <div className="col-span-2 text-right">
      <h1 className="text-7xl px-2 mt-[200px]">
        Manipal
      </h1>
      <h1 className="text-9xl px-2">
      <span className="font-bold text-orange-600">Mercantile</span>
      </h1>

      <div className="ml-[450px]">
          {/* insert lotti here */}
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_tpa51dr0.json"
            style={{ width: 30 + "rem" }}
          ></lottie-player>
        </div>
      </div>

      
       {/* Login Form */}
      <div className="flex flex-col items-center justify-center bg-orange-600 p-5 rounded-lg text-center">
        <h1 className="text-5xl pb-8 text-white text-bold">Register</h1>

        <form>
          <input
            required
            className="text-center bg-gray-200 rounded-full flex items-center py-1 w-[200px] sm:w-[400px] lg:w-[500] mb-5"
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            required
            className="text-center bg-gray-200 rounded-full flex items-center py-1 w-[200px] sm:w-[400px] lg:w-[500] mb-5"
            type="email"
            placeholder="mobile"
            name="email"
            onChange={handleChange}
          />
          <input
            required
            className="text-center bg-gray-200 rounded-full flex items-center py-1 w-[200px] sm:w-[400px] lg:w-[500] mb-10"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />

          <button
            className=" bg-white p-2 rounded-full px-4 text-orange-600 hover:bg-gray-600 mb-5"
            onClick={handleSubmit}
          >
            Register
          </button>
          {err && <p>{err}</p>}
          {/* <p className="text-red-300">There is an error</p> */}
          <p>
            Do you have a account? <Link to="/login"><span className="text-black opacity-100 hover:text-white">Login</span></Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;