import React from 'react';
//import image from './ressources/max.png';
import image from './ressources/black.png';
import './Homepage.css';
import { Link } from "react-router-dom";


function Homepage() {
    return (
      
      <div>
        <Link to ='/articles'>
        <div className='showcase'>
          <div className='picture'>
            <img className='article-img' src={image } alt="" />
          </div>
          <div className='title'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, eum?
          </div>
        </div>
        </Link>
      <div id="posts">
            <div id="post1" className="post">
          <div className="post-card">
              <img className='article-img' src={image} alt='' />
                <div className='card-text'>
                  <h3><a >A Super Wonderful Headline</a></h3>
                  <p>Lorem ipsum sit dolor amit</p>
                </div>
                
              </div>
            </div>
            <div id="post2" className="post">
              <div className="post-card">
                <img  className='article-img' src={image} alt=''/>
                <div className='card-text'>
                  <h3><a >A Super Wonderful Headline</a></h3>
                  <p>Lorem ipsum sit dolor amit</p>
                </div>
              </div>
            </div>
            <div id="post3" className="post">
              <div className="post-card">
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