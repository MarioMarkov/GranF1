import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../Article';

function Story(props) {
    const id = useParams()
    console.log(id)
    return (
        <div>
            {id.articleId}
        </div>
    );
}

export default Story;