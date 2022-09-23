import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../Article';

function Story(props) {
    const params = useParams()
    console.log(params)
    return (
        <div>
            {params.articleId}
        </div>
    );
}

export default Story;