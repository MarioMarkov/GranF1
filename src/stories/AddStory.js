import React from 'react';
import { useState } from 'react';
import './AddStory.css';
import { Buffer } from "buffer";
function AddStory({ addArticle }) {
    const [state, setState] = useState({ title: '', content: '' });
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        addArticle({title:state.title,content: state.content,image:file})
    }

    const [file, setFile] = useState();
    
    function handleChange(e) {
        let file = URL.createObjectURL(e.target.files[0]);
        const buffer = Buffer.from(file)
        setFile(buffer);
    }
  
   
    return (
        <div className='story-form'>
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
                <label>
                    Image:
                    <input type="file" onChange={handleChange} />
                    {/* <img src={file} width='100px' height='100px' /> */}

                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddStory;