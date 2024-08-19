import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaUser, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Header() {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    // Function to toggle the slider
    const toggleSlider = () => {
        setIsSliderOpen(!isSliderOpen);
    };
    return (  
        <div className='head w-full h-12 bg-purple-800 flex justify-around items-center  md:h-14 '>
            <div className='icon flex gap-1.5 py-1 pl-4 w-56 h-12 justify-start items-center md:h-14 '>
                <i onClick={toggleSlider} className=' hover:cursor-pointer headImg text-3xl py-0.5 text-white fa-solid fa-clipboard-list sm:text-4xl pl-0.5'></i>
                <p onClick={toggleSlider} className='hover:cursor-pointer text-white text-2xl font-medium sm:text-3xl xl:text-4xl xl:pl-1'>TO-Do</p>
            </div>
            <div className='leftHead flex w-2/3 h-12 gap-1 justify-end items-center pr-1 sm:h-14 sm:gap-3 sm:pr-3 md:gap-7 lg:gap-8 xl:gap-12 xl:pr-10 '>
                <ul className='flex  text-white items-center justify-center w-20 sm:w-24  h-12 gap-1 sm:h-14  lg:w-32'>
                    <Link to={'/'}><i className='fa-solid fa-home pt-1 text-xl font-medium lg:text-3xl'></i></Link>
                    <li><Link className='HeadName text-lg font-medium md:text-2xl lg:text-3xl' to='/' >Home</Link></li>
                </ul>
                <ul className='flex text-white w-28 h-12 items-center justify-center gap-1 lg:h-14 lg:w-32'>
                    <Link to={'/yourTask'}><i className='fa-solid fa-rectangle-list pt-1.5 text-xl font-medium lg:text-3xl'></i></Link>
                    <li><Link className='HeadName text-lg font-medium md:text-2xl lg:text-3xl' to='/yourTask' >YourTask</Link></li>
                </ul>
            </div>

            
            {isSliderOpen && (
                <div className='fixed inset-0 bg-black opacity-50 z-40 ' 
                onClick={toggleSlider}>
                    
                </div>
            )}

            
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-200 
                shadow-lg transform transition-transform duration-300 ease-in-out z-50  ${isSliderOpen ? 'translate-x-0' : '-translate-x-full'}`
                }>

                <div className="h-full p-4 bg-purple-50 text-black rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Y<span className='text-purple-950 font-bold '>ou</span>r Accou<span className=' text-purple-950 font-bold '>nt</span></h2>
                    <ul className="space-y-2 flex-row gap-2">
                        <li className="flex items-center hover:bg-white hover:border-b-2 hover:cursor-pointer  transition-all duration-300 p-2 rounded-md">
                            <FaUser className="text-3xl animate-bounce text-black" />
                            <span className="ml-4 text-lg font-medium">Username: Irshad Hussain</span>
                        </li>
                        <li className="flex items-center hover:bg-white hover:border-b-2 hover:cursor-pointer  transition-all duration-300 p-2 rounded-md">
                            <FaEnvelope className="text-3xl animate-bounce text-black" />
                            <span className="ml-4 text-lg font-medium">Email: irshad@gmail.com</span>
                        </li>
                        <li className="flex items-center hover:bg-white hover:border-b-2 hover:cursor-pointer  transition-all duration-300 p-2 rounded-md">
                            <FaCog className="text-3xl animate-spin text-black" />
                            <span className="ml-4 text-lg font-medium">Settings</span>
                        </li>
                        <li className="flex items-center hover:bg-white hover:border-b-2 hover:cursor-pointer  transition-all duration-300 p-2 rounded-md"
                        onClick={toggleSlider}>
                            <FaSignOutAlt className="text-3xl animate-pulse text-black " />
                            <span className="ml-4 text-lg font-medium">
                                Logout
                            </span>
                        </li>
                    </ul>
                </div>




            </div>

        </div>





        


    );
}

export default Header;
