import React ,{ useState ,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import AddStory from './AddStory';
import Story from './Story';
import image from '../ressources/black.png';
import './Stories.css';
function Stories() {
    

    const [articles, setArticles] = useState([]);

    const addArticle = (article) => { 
        let newArticle = [...articles, article]
        setArticles(newArticle);
    }
    

    return (
        <div>
            <AddStory addArticle={addArticle}></AddStory>
             <div className='grid-container'>
                {articles.map((article) => {
                    return (
                        <div className='grid-item article-item' key={article.id}>
                            <Link to={`/story/:${article.id}`}>
                                <div>Title : {article.title}</div>
                                <div>Contents: { article.contents}</div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
        
    );
}

export default Stories;