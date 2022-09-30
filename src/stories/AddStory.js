import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function AddStory({ addArticle }) {
    const [state, setState] = useState({ title: '', content: '' });
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        addArticle({title:state.title,content: state.content})
    }
    
    return (
        <div>
            AddStory: 
            <form onSubmit={ e => handleSubmit(e)}>
                <label>
                    Title:
                    <input onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                        value={state.title} type="text" name="title" />
                </label>
                <label>
                    Content:
                    <input onChange={e =>   setState({ ...state, [e.target.name]: e.target.value })}
                        value={state.content} type="text" name="content" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddStory;