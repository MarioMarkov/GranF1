import React from 'react';
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
                <Link to="/articles/all/true">Race Reviews</Link> 
                <Link to="/articles/all/false">F1 Stories</Link> 
                <Link to="/about">About</Link> 
          <Link to="/add">Add Article</Link>
          { user && <Button variant="primary" onClick={handleLogout}>
                    Log out
          </Button>}
          {!user &&
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>

            </>
          }
                
          <span>User : { user && user.email}</span>
        </div>
            
          
    </div>
    );
}

export default Navbar;