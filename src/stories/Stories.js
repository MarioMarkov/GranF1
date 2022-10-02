import React ,{ useState ,useEffect} from 'react';
import { Link,  } from "react-router-dom";
import AddStory from './AddStory';
import './Stories.css';
import { Buffer } from "buffer";

function Stories() {

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };


    useEffect(() => {
        fetch("/api/stories")
            .then(resp => resp.json())
            .then(data => { 
               
                data.map((article) => { 
                    if (typeof article.image !== 'undefined') { 
                        
                        var base64Flag = 'data:image/jpg;base64,';
                        var imageStr = arrayBufferToBase64(article.image.data.data);
                        
                        article.image.data.data = base64Flag + imageStr
                    }
                })
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
    
    const renderImage = (article) => { 
        if (typeof article.image !== 'undefined') {
            console.log(article.image.data.data)
            return <img src={article.image.data.data} alt="" />
        } else { 
            
            return <img src='' alt="" />
            
        }
        
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
                                
                                { renderImage(article) }
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
        
    );
}

export default Stories;