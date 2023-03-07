import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";


function Navbar() {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
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
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
        </div>
            
          
    </div>
    );
}

export default Navbar;