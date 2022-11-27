import React from 'react';
import { useState ,useEffect} from 'react';
import './AddStory.css';
function AddStory({ addArticle }) {
       
    const [state, setState] = useState({ title: '', content: '' });
    const [image, setImage] = useState(null)

    function onChange(e){ 
        setImage([e.target.files[0]])
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        addArticle({title:state.title,content: state.content,image:image})
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
                    Image
                    <input onChange={onChange} type="file" id="img" name="img" accept="image/*"/>
                    
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddStory;