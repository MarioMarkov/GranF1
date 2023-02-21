import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditArticle.css'
import './AddArticle.css';
import { useNavigate } from "react-router-dom";


function EditArticle() {
    
    const params = useParams()
    const navigate = useNavigate();

    // Original article from database
    const [article, setArticle] = useState({});

    // Values set in the input fields
    const [state, setState] = useState({title: '', content:'', image_name : ''});


    useEffect(() => {

        async function fetchData() {
            await axios.get("/api/articles/".concat(params.articleId))
                .then(response => {
                    setArticle(response.data)
                    setState(response.data)
                })
                .catch((err) => console.log(err));
        }
        fetchData();
    }, [params.articleId])


    const editArticle = async () => { 
        await axios.post(`/api/articles/edit/${article._id}`, state, {
          mode: 'cors',
            headers: {
              // It does not work with multipart/formdata unless sending an image
            "Content-Type": "application/json"
           }
        });
        
    }
    const handleSubmit = (e) => { 
        e.preventDefault()
        editArticle(state)        
        navigate(-1);
    }   

    return (
        <div className="container">
            <h3 className='form-title'>Edit Article: </h3>

    <form onSubmit={ e => handleSubmit(e)}>
        <div className="row">
            <div className="col-25">
                        <label htmlFor="title">Title</label>
                        
            </div>
            <div className="col-75">
            <input defaultValue={article.title} onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                        type="text" name="title" />
            </div>
        </div>
       
        <div className="row">
            <div className="col-25">
            <label htmlFor="content">Content</label>
            </div>
            <div className="col-75">
            <textarea onChange={e =>   setState({ ...state, [e.target.name]: e.target.value })}
                        defaultValue={article.content} type="text" name="content"  />  </div>
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
                            setState({...state,image_name:event.target.files[0].name });
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

export default EditArticle;