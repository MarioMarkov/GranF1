import React from 'react';
//import './Navbar.css';
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

    <div className="w-[95%] text-[25px] text-center font-semibold mt-2 mb-12 m-auto p-[15px] rounded-[10px]">
        <div className='hover:animate-bounce inline float-left hover:pb-4 '>
                Gran F1
        </div>
        <div className='inline ml-0'>
                <Link className='p-2.5' to="/">Home</Link> 
                <Link className='p-2.5'  to="/articles/all/true">Race Reviews</Link> 
                <Link className='p-2.5'  to="/articles/all/false">F1 Stories</Link> 
                <Link className='p-2.5'  to="/about">About</Link> 
                {process.env.NODE_ENV === 'development' ?
                  <Link className='p-2.5'  to="/add">Add Article</Link>: <></>
                }
          { process.env.NODE_ENV === 'development' & user ? <Button className='p-2.5'  variant="primary" onClick={handleLogout}>
                    Log out
          </Button>:<></>}
          {process.env.NODE_ENV === 'development' & !user ?
            <>
              <Link className=' p-2.5' to="/signup">Sign Up</Link>
              <Link className=' p-2.5' to="/login">Log In</Link>

            </>
          :<></>}
          {process.env.NODE_ENV === 'development' & user ?
            <span className='p-2.5' >User : {user.email}</span>
          :<></>}
        </div>
            
          
    </div>
    );
}

export default Navbar;