import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddStory from './AddStory';
import image from '../ressources/black.png';
import './Stories.css';
function Stories() {
    const [articles, setArticles] = useState([]);

    const addArticle = (article) => { 
        let newArticle = [...articles, article]
        setArticles(newArticle)
    }

    return (
        <div>
            <AddStory addArticle={addArticle}></AddStory>
            Stories:
            <div className="grid-container">
            {articles.map((article) => { 
                <div  className="post">
                    <div className="post-card">
                        <img  className='article-img' src={image} alt=''/>
                        <div className='card-text'>
                            <h3><a >{ article.title}</a></h3>
                            <p>{article.contents }</p>
                        </div>
                    </div>
                </div>

            } )}
            </div>
        </div>
        
    );
}

export default Stories;