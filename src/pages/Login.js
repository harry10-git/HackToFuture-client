// import axios from "axios";
import React, { useState, Component } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "@lottiefiles/lottie-player";

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
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
   


    <div className="min-h-screen flex items-center justify-center login-div">
      {/* login div */}
      <div className=" flex">
        {/* form */}
        <div className="w-1/2 bg-orange-500 rounded-2xl shadow-2xl p-5 px-14 pt-[100px]">
          <h2 className="font-bold text-5xl text-white mb-5">Login</h2>
          <p className="text-md text-white">
            You can login if you have previously registered
          </p>

          <form className="flex flex-col gap-7">
            <input
              className="p-2 mt-8 rounded-xl border text-center"
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />

            <input
              className="p-2 rounded-xl border text-center"
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />

            <button
              onClick={handleSubmit}
              className="bg-orange-300 rounded-xl py-2 text-white hover:bg-white hover:text-orange-500"
            >
              Login
            </button>
          </form>

          {/* divider */}

          <div className="mt-10 text-gray-100 grid grid-cols-3 items-center">
            <hr className="outline-gray-500" />
            <p className="text-center">OR</p>
            <hr className="outline-gray-500" />

            

          </div>

          {err && <p>{err}</p>}
         <p className="text-gray-300 mt-8 text-center">
           Don't you have a account?{" "}
           <Link to="/register">
              <span className="text-white opacity-100 hover:text-blue-300 hover:border hover:p-1 hover:rounded-lg ml-5">
               Register
             </span>
           </Link>{" "}
         </p>
        </div>

        {/* image */}

        <div className="w-1/2 p-5">
          {/* insert lotti here */}
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets4.lottiefiles.com/packages/lf20_XpVCMJTSQt.json"
            style={{ width: 40 + "rem" }}
          ></lottie-player>
        </div>
      </div>
    </div>
    // -------------------------------------------

   
  );
};

export default Login;
