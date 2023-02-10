import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './AddArticle.css';
import { useNavigate } from "react-router-dom";


function AddArticle() {

    // Image markdown tag ![alt text htmlFor screen readers](link "Text to show on mouseover").

    const navigate = useNavigate();
    const [state, setState] = useState({ title: '', content: '' });
    const [image, setImage] = useState(null)

    const handleSubmit = (e) => { 
        e.preventDefault()
        addArticle({ title: state.title, content: state.content, image: image, image_name: image.name })
        navigate("/articles");
    }
   

    const addArticle =  async (article) => { 

        try {
            await axios.post("/api/articles", article, {
            mode: 'cors',
              headers: {
                "Content-Type": "multipart/form-data"
              }
            });
          } catch (err) {
            console.log(err);
          }
        
        // TODO et all articles again
        console.log(article)
    }

    return (
        <div className="container">
    <form onSubmit={ e => handleSubmit(e)}>
        <div className="row">
            <div className="col-25">
                        <label htmlFor="title">Title</label>
                        
            </div>
            <div className="col-75">
            <input onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                          type="text" name="title" placeholder='Write Title...' />
            </div>
        </div>
       
        <div className="row">
            <div className="col-25">
            <label htmlFor="content">Content</label>
            </div>
            <div className="col-75">
                        <textarea onChange={e =>   setState({ ...state, [e.target.name]: e.target.value })}
                         type="text" name="content" style={{ height: 200 + 'px' }} placeholder="Write something.." />
            </div>
                </div>
        <div className="row">
            <div className="col-25">
                        <label htmlFor="title">Image</label>
                        
            </div>
            <div className="col-75">
            <input
                        type="file"
                        name="image"
                        onChange={(event) => {
                            setImage(event.target.files[0]);
                        }}
                    />
            </div>
        </div>
        <br/>
        <div className="row">
            <input type="submit" value="Submit"/>
        </div>
        </form>
    </div>
    );
}

export default AddArticle;