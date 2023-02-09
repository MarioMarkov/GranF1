import React from 'react';
import { useState } from 'react';

import './AddArticle.css';
function AddArticle({ addArticle }) {

    // Image markdown tag ![alt text for screen readers](link "Text to show on mouseover").

       
    const [state, setState] = useState({ title: '', content: '' });
    const [image, setImage] = useState(null)

    const handleSubmit = (e) => { 
        e.preventDefault()
        addArticle({title:state.title,content: state.content,image:image, image_name:image.name})
    }
   
    return (
        <div className='story-form'>
            Add Article: 
            <form onSubmit={ e => handleSubmit(e)}>
                <label>
                    Title:
                    <input onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                        value={state.title} type="text" name="title" />
                </label>
                <label>
                    Content:
                    <textarea onChange={e =>   setState({ ...state, [e.target.name]: e.target.value })}
                        value={state.content} type="text" name="content" />
                </label>
                <label>
                    
                    Image
                    <input
                        type="file"
                        name="image"
                        onChange={(event) => {
                            setImage(event.target.files[0]);
                        }}
                    />
                    
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddArticle;