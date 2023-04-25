// import axios from "axios";
import React, { useState } from "react";
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
    <div className="mt-[250px] flex justify-center ">
      <div className="flex flex-col items-center justify-center bg-green-100 p-5 rounded-lg text-center">
        <h1 className="text-5xl pb-8">Login</h1>

        <form action="">
          <input
            className="mb-4 pb-2 p-2 border-2 flex flex-col"
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            className="mb-4 p-2 border-2 flex flex-col"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />

          <button className=" bg-blue-300 p-2 rounded-xl px-4 hover:bg-gray-400" onClick={handleSubmit}>
            Login
          </button>
          {err && <p>{err}</p>}
          <p>
            Don't you have a account? <Link to="/register">Register</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
