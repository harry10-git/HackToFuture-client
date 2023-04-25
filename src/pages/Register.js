import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

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
    <div className="mt-[250px] flex justify-center ">
      <div className="flex flex-col items-center justify-center bg-green-100 p-5 rounded-lg text-center">
        <h1 className="text-5xl pb-8">Register</h1>

        <form>
          <input
            required
            className="mb-4 pb-2 p-2 border-2 flex flex-col"
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            required
            className="mb-4 pb-2 p-2 border-2 flex flex-col"
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            required
            className="mb-4 p-2 border-2 flex flex-col"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />

          <button
            className=" bg-blue-300 p-2 rounded-xl px-4 hover:bg-gray-400"
            onClick={handleSubmit}
          >
            Register
          </button>
          {err && <p>{err}</p>}
          {/* <p className="text-red-300">There is an error</p> */}
          <p>
            Do you have a account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
