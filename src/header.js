import React from 'react'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    return (  
        <div className='head'>
            <div className='icon'>
                <i className='headImg fa-solid fa-clipboard-list'></i>
                <p>TO-Do</p>
            </div>
            <div className='leftHead'>
                <ul>
                    <i className='fa-solid fa-home'></i>
                    <li><Link className='HeadName' to='/' >Home</Link></li>
                </ul>
                <ul>
                    <i className='fa-solid fa-rectangle-list'></i>
                    <li><Link className='HeadName' to='/yourTask' >YourTask</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;