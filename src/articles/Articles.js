import React ,{ useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import './Articles.css';

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

   
    
    
    return (
        <div>
             <div className='grid-container'>
                {articles.map((article) => {
                   
                    return (
                        
                        <div className='grid-item article-item' key={article._id}>
                            <Link to={`/articles/${article._id}`} key={article._id}>
                                <div>Title : {article.title}</div>                               
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
        
    );
}

export default Articles;