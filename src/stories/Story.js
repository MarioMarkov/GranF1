import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Story(props) {

    const params = useParams()
    const [article, setArticle] = useState({});
    console.log(params.articleId)
    useEffect(() => {
        fetch("/api/stories/".concat(params.articleId))
            .then(resp => resp.json())
            .then(data => setArticle(data))
    }, []) 

    return (
        <div>
            Title: { article.title}
        </div>
    );
}

export default Story;