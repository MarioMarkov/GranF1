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
                <Link to="/">Home</Link> 
                <Link to="/articles">Race Reviews</Link> 
                <Link to="/articles">F1 Stories</Link> 
                <Link to="/about">About</Link> 
                <Link to="/add">Add Article</Link>

        </div>
            
            {/* <div className='navbar-search'>
                <div className="search-container">
                        <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div> */}
    </div>
    );
}

export default Navbar;