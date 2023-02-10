import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './AddArticle.css';


function AddArticle() {

    // Image markdown tag ![alt text htmlFor screen readers](link "Text to show on mouseover").

       
    const [state, setState] = useState({ title: '', content: '' });
    const [image, setImage] = useState(null)

    const handleSubmit = (e) => { 
        e.preventDefault()
        addArticle({title:state.title,content: state.content,image:image, image_name:image.name})
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
        // <div className='story-form'>
        //     Add Article: 
        //     <form onSubmit={ e => handleSubmit(e)}>
        //         <label>
        //             Title:<input onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
        //                 value={state.title} type="text" name="title" />
        //         </label><br />

        //         <label>
        //             Content:
        //             <textarea onChange={e =>   setState({ ...state, [e.target.name]: e.target.value })}
        //                 value={state.content} type="text" name="content" />
        //         </label><br />
        //         <label>
                    
        //             Image
        //             <input
        //                 type="file"
        //                 name="image"
        //                 onChange={(event) => {
        //                     setImage(event.target.files[0]);
        //                 }}
        //             />
                    
        //         </label>
        //         <input type="submit" value="Submit" />
        //     </form>
        // </div>
        <div className="container">
    <form action="/action_page.php">
        <div className="row">
            <div className="col-25">
            <label htmlFor="title">Title</label>
            </div>
            <div className="col-75">
            <input onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                        value={state.title} type="text" name="title" />
            </div>
        </div>
       
        <div className="row">
            <div className="col-25">
            <label htmlFor="subject">Subject</label>
            </div>
            <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height : 200 + 'px'}}></textarea>
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