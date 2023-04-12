import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next'

import { Gb, Bg } from "react-flags-select";

function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false)

  // Getting current location in url
  const location = useLocation();

  // Variable to store the current location url
  const [url, setUrl] = useState(null);
  const { logOut, user } = useUserAuth();

  // Navigate to redirect after a log out
  const navigate = useNavigate();

  // Setting url variable to the current url for the line below nav items
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  // Translation functions
  const { t, i18n  } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  // Auth functions

  // Function to render log in or sign up or log out depending if 
  // a user is logged in
  const renderAuthenticationUI = () => {
    //console.log(user);
    if(user){
      return (
        <Button className='p-2.3 mx-2'  variant="primary" onClick={handleLogout}>
                    Log out
        </Button>
      )
      }else{
      return (
        <>
          <Link className='p-2.3 mx-2' to="/signup">{t('sign_up')}</Link>
          <Link className='p-2.3 mx-2' to="/login">{t('login')}</Link>
        </>
        )
      }
    }

  const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
  };

    
    
    return (
      <div>
        
    <div className="w-[95%] text-[28px] text-center font-semibold mt-1 mb-12 m-auto p-[13px]">
        <div className='hover:animate-bounce inline float-left hover:pb-4 '>
                Gran F1
        </div>
        <div id="nav-items" className='hidden md:inline'>
        <Link className={"p-2.3 mx-2 " + (url === "/" ? "  border-b-[3px] border-b-purple" : "")} to="/">{t('home')}</Link> 
                <Link className={"p-2.3 mx-2" + (url === "/articles/all/true" ? "  border-b-[3px] border-b-purple" : "")}   to="/articles/all/true">{t('race_reviews')}</Link> 
                <Link className={"p-2.3 mx-2" + (url === "/articles/all/false" ? "  border-b-[3px] border-b-purple" : "")}  to="/articles/all/false">{t('f1_stories')}</Link> 
                <Link className={"p-2.3 mx-2" + (url === "/about" ? " border-b-[3px] border-b-purple" : "")}  to="/about">{t('about')}</Link> 
                
                {process.env.NODE_ENV === 'development' ?
                  <Link className={"p-2.3 mx-2" + (url === "/add" ? " border-b-[3px] border-b-purple" : "")}  to="/add">{t('add_article')}</Link>: <></>
                }
          {/* { process.env.NODE_ENV === 'development' && renderAuthenticationUI()} */}
          <div className='float-right'>
            
              <button><Gb onClick={() => changeLanguage('en')} className='inline'></Gb></button> {' '}

              <button><Bg onClick={() => changeLanguage('bg')} className='inline'></Bg></button>
            
          </div>  
        </div>
                
          <button onClick={() => {console.log(mobileMenu); setMobileMenu(true)}}  id="hamburger-button" className='md:hidden cursor-pointer float-right'>
                &#9776;
          </button>
        </div>
        {mobileMenu==true &&
          <section id='mobile-menu' 
        className={' text-white absolute top-0 bg-purple opacity-90 w-full text-5xl  flex-col justify-content-center origin-top animate-open-menu ' }>
          <button className="text-8xl float-right self-end px-10" onClick={() => {console.log(mobileMenu); setMobileMenu(false)}}>
            &times;
          </button>
          <nav aria-label='mobile' className="flex flex-col w-full min-h-screen items-center opacity-100">
              <a href="" className='w-full text-center hover:opacity-90 text-white py-8'>Test</a>
              <a href="" className='w-full text-center hover:opacity-90 text-white py-8'>Test</a>
              <a href="" className='w-full text-center hover:opacity-90 text-white py-8'>Test</a>
              <a href="" className='w-full text-center hover:opacity-90 text-white py-8'>Test</a>

          </nav>
        </section>
        }
        
          
      </div>
    );
}

export default Navbar;