import React from 'react';
import PropTypes from 'prop-types';
import image from './ressources/max.png';
import './Homepage.css';
import Navbar from './navigation/Navbar';
import { Link } from "react-router-dom";


function Homepage() {
    return (
      
      <div>
        <Link to ='/stories'>
        <div className='showcase'>
          <div className='picture'>
            <img className='article-img' src={image } alt="" />
          </div>
          <div className='title'>
            Гран При на Зандвоорт 2022 асдасд асдсад
          </div>
        </div>
        </Link>
      <div id="posts">
            <div id="post1" className="post">
          <div class="post-card">
              <img className='article-img' src={image} alt='' />
                <div className='card-text'>
                  <h3><a >A Super Wonderful Headline</a></h3>
                  <p>Lorem ipsum sit dolor amit</p>
                </div>
                
              </div>
            </div>
            <div id="post2" className="post">
              <div class="post-card">
                <img  className='article-img' src={image} alt=''/>
                <div className='card-text'>
                  <h3><a >A Super Wonderful Headline</a></h3>
                  <p>Lorem ipsum sit dolor amit</p>
                </div>
              </div>
            </div>
            <div id="post3" className="post">
              <div class="post-card">
                <img className='article-img'  src={image} alt=''/>
                <div className='card-text'>
                  <h3><a >A Super Wonderful Headline</a></h3>
                  <p>Lorem ipsum sit dolor amit</p>
                </div>
              </div>
            </div>
</div>
        </div>
    );
}

export default Homepage;