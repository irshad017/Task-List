import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AccountSlider() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the slider
    const toggleSlider = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Account Icon */}
            <div className="fixed top-4 left-4 z-50 cursor-pointer" onClick={toggleSlider}>
                <i className="fa-solid fa-user text-3xl text-purple-800"></i>
            </div>

            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSlider}></div>}

            {/* Left Slider */}
            <div
                className={`fixed top-0 left-0 h-full bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
                    <ul className="space-y-4">
                        <li>
                            <i className="fa-solid fa-user text-purple-800"></i>
                            <span className="ml-2">Username: John Doe</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope text-purple-800"></i>
                            <span className="ml-2">Email: john.doe@example.com</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-cog text-purple-800"></i>
                            <span className="ml-2">Settings</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-sign-out-alt text-purple-800"></i>
                            <span className="ml-2">Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AccountSlider;
