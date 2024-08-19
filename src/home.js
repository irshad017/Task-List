import React from 'react'
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Import icons
function Home() {
    return (  
        <div className=" flex justify-center items-start min-h-screen bg-gray-100 pt-20">
        <div className="text-center">
        <h1 className="text-4xl font-bold mb-6"><span className='text-purple-900'>Wel</span>come to <br></br>To<span className='text-purple-900'>Do</span> App</h1>
        <div className="flex space-x-4">
            <Link
                to="/login"
                className="relative inline-flex items-center px-6 py-3 overflow-hidden text-lg font-medium text-white bg-blue-500 rounded-md group"
            >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 ease-in-out transform translate-x-12 bg-blue-700 opacity-30 rotate-12 group-hover:-translate-x-40"></span>
                <span className="absolute left-0 w-48 h-48 mt-2 transition-all duration-500 ease-in-out transform -translate-x-56 -translate-y-24 rotate-45 bg-blue-600 opacity-30 group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center space-x-2">
                    <FaSignInAlt className="text-white" />
                    <span>Login</span>
                </span>
            </Link>
            <Link
                to="/signup"
                className="relative inline-flex items-center px-6 py-3 overflow-hidden text-lg font-medium text-white bg-green-500 rounded-md group"
            >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 ease-in-out transform translate-x-12 bg-green-700 opacity-30 rotate-12 group-hover:-translate-x-40"></span>
                <span className="absolute left-0 w-48 h-48 mt-2 transition-all duration-500 ease-in-out transform -translate-x-56 -translate-y-24 rotate-45 bg-green-600 opacity-30 group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center space-x-2">
                    <FaUserPlus className="text-white" />
                    <span>Sign Up</span>
                </span>
            </Link>
        </div>
        </div>
    </div>
    );
}

export default Home;