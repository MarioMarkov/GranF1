import React ,{ useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import AddStory from './AddStory';
import './Stories.css';

function Stories() {


    useEffect(() => {
        fetch("/api/stories")
            .then(resp => resp.json())
            .then(data => { 
                setArticles(data)
                
            })
    }, [])  

    

    const [articles, setArticles] = useState([]);

    const addArticle =  async (article) => { 
        let newArticle = [...articles, article]
        
        const response = await fetch('/api/stories', {
            method: 'POST', 
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(article) 
        });
        
        
        setArticles(newArticle);    
    }
    
    
    return (
        <div>
            <AddStory addArticle={addArticle}></AddStory>
             <div className='grid-container'>
                {articles.map((article) => {
                    return (
                        <div className='grid-item article-item' key={article._id}>
                            <Link to={`/stories/${article._id}`}>
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

export default Stories;