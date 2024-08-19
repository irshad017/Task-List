import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("https://mongodb:27017/todo ",
        {
            email,
            password,
        }
    );
    alert("Login successful");
    navigate("/");
    } catch (error) {
        alert("Login failed");
    }
};

return (
    <div className="flex justify-center sm:min-h-full sm:pt-20 sm:pb-20 p-10">
        <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded shadow-md sm:w-96 sm:pb-20 w-72"
        >
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md"
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md"
            />
            <button
            type="submit"
            className="text-wl  w-full px-4 py-2 bg-purple-700 text-white rounded-md"
            >
            Login
            </button>
            <p className="pl-2 mt-1 mb-4">New to Todo? <a href='/signup' className="text-blue-700 font-medium hover:underline"> Join Now </a></p>
        </form>
    </div>
);
};

export default Login;
