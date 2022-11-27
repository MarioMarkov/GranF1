import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Story() {

    const params = useParams()
    const [article, setArticle] = useState({});
   
    useEffect(() => {
        fetch("/api/stories/".concat(params.articleId))
            .then(resp => resp.json())
            .then(data => { 
                setArticle(data)
            })
    }, []) 

    return (
        <div>
            Title: {article.title}    
        </div>
    );
}

export default Story;