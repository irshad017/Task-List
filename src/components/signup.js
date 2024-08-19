import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleSignup = async (e) => {
e.preventDefault();
try {
    await axios.post('https://shorturl.at/DUmYs', { 
        email,
        password
    });
    alert('Signup successful');
    navigate('/login');
} catch (error) {
    alert('Signup failed');
}
};

return (
<div className="flex justify-center sm:min-h-full sm:pt-20 sm:pb-20 p-10">
    <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md sm:w-96 sm:pb-20 w-72">
    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
    <button type="submit" className="w-full px-4 py-2 bg-purple-700 text-white rounded-md">
        Sign Up
    </button>
    <p className='m-2'>Already Have Account<span>? </span><a href='/login' className='text-blue-600 font-medium hover:underline'> Login</a></p>
    </form>
</div>
);
};

export default Signup;
