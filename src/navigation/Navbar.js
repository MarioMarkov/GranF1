import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next'

import { Gb, Bg } from "react-flags-select";

function Navbar() {
    const { t, i18n  } = useTranslation();

    function changeLanguage(lang) {
      i18n.changeLanguage(lang);
    }

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

    <div className="w-[95%] text-[28px] text-center font-semibold mt-1 mb-12 m-auto p-[13px] rounded-[10px]">
        <div className='hover:animate-bounce inline float-left hover:pb-4 '>
                Gran F1
        </div>
        <div className='inline ml-0'>
                <Link className='p-2.5' to="/">{t('home')}</Link> 
                <Link className='p-2.5'  to="/articles/all/true">{t('race_reviews')}</Link> 
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
              <Link className='p-2.5' to="/signup">Sign Up</Link>
              <Link className='p-2.5' to="/login">Log In</Link>

            </>
          :<></>}
          {process.env.NODE_ENV === 'development' & user ?
            <span className='p-2.5' >User : {user.email}</span>
          :<></>}
          <div className='float-right'>
            
              <button><Gb onClick={() => changeLanguage('en')} className='inline'></Gb></button> {' '}

              <button><Bg onClick={() => changeLanguage('bg')} className='inline'></Bg></button>

          </div>
        </div>
            
          
    </div>
    );
}

export default Navbar;