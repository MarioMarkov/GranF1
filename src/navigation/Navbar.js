import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
    return (

    <div className="navbar">
        <div className='logo'>
                Gran F1
        </div>
        <div className='navbar-links'>
                <a href="">Home </a>
                <a href="">Race Reviews</a>
                <Link to="/stories">F1 Stories</Link> 
                <Link to="/about">About</Link> 

        </div>
            
            <div className='navbar-search'>
                <a href="">Search</a>
        </div>
    </div>
    );
}

export default Navbar;