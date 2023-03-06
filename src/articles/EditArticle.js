import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditArticle.css'
import './AddArticle.css';
import { useNavigate } from "react-router-dom";
import storage from '../fireBaseConfig.js'
import {
    getDownloadURL,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';




function EditArticle() {
    
    const params = useParams()
    const navigate = useNavigate();

    const [file, setFile] = useState("");

    // Original article from database
    const [article, setArticle] = useState({});

    // Values set in the input fields
    const [state, setState] = useState({title: '', content:'', image_url : ''});
    const [percent, setPercent] = useState(0);


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

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleUpload() { 
        if (!file) { 
            alert("Upload a file")
        }
        const storageRef = ref(storage, `/images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    
                    setPercent(percent);
    
            },
            (err) => console.log(err),
            () => { 
                getDownloadURL(uploadTask.snapshot.ref).then((url) => { 
                    console.log(url)
                    setState({ ...state, image_url: url })
                })
            }
            
        )
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        if (!file) { 
            alert("Please choose an image first!")
        }
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
                <input type="file" onChange={handleChange} accept="" />
                <button type='button' onClick={handleUpload}>Upload to Firebase</button>
                <p>{percent} "% done"</p>

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