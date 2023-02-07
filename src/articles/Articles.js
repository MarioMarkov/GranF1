import React ,{ useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import AddArticle from './AddArticle';
import './Articles.css';
import axios from 'axios';

function Articles() {

    const [articles, setArticles] = useState([]);

    const getArticles = () => { 
        fetch("/api/articles")
            .then(resp => resp.json())
            .then(data => { 
                setArticles(data)
            })
    }

    useEffect(() => {
        getArticles()
    }, [])  

    const addArticle =  async (article) => { 
        let articles_new = [...articles, article]

        try {
            const response = await axios.post("/api/articles", article, {
            mode: 'cors',
              headers: {
                "Content-Type": "multipart/form-data"
              }
            });
          } catch (err) {
            console.log(err);
          }
        
        // TODO et all articles again
        setArticles(articles_new);    
        getArticles();
        console.log(articles)
    }
    
    
    return (
        <div>
            <AddArticle addArticle={addArticle}></AddArticle>
             <div className='grid-container'>
                {articles.map((article) => {
                    {console.log(article._id)}
                    return (
                        
                        <div className='grid-item article-item' key={article._id}>
                            <Link to={`/articles/${article._id}`} key={article._id}>
                                <div>Title : {article.title}</div>
                                <div>Content: {article.content}</div>
                               
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
        
    );
}

export default Articles;