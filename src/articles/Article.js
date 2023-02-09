import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Article.css'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Article() {

    const navigate = useNavigate();
    const params = useParams()
    const [article, setArticle] = useState({});
    const [image, setImage] = useState({})


  
    useEffect(() => {

        async function fetchData() {
            await axios.get("/api/articles/".concat(params.articleId))
                .then(response => {
                    setArticle(response.data)
                })
                .catch((err) => console.log(err));
        }
        fetchData();
        async function fetchImage() { 
            await fetch(`/api/articles/${params.articleId}/image`)
            .then(response => response.blob())
            .then(imageBlob => {
                // Then create a local URL for that image and print it 
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImage(imageObjectURL)
            })
        }

        fetchImage()
        
    }, [params.articleId])


    const deleteImage = async (articleId) => {

        if (window.confirm("Are you sure!") === true) {
            let result = await fetch(`/api/articles/delete/${articleId}`, {
                method: "DELETE"
            })
            result = await result.json()
            if (result) {             
                navigate(-1);
            }
          } else {
            return
          }
        

        
     }
   
    return (
        <div className='article-content'>
            <Link className = 'edit-article-btn' to={`/articles/edit/${ article && article._id}`}>Edit Article</Link> 
            
            <button onClick={() => deleteImage(article._id)} className='delete-article-btn' > Delete </button> 

            <div className = "article-title">
                 {article.title}
            </div>
            <div className='article-image'>

            </div>
                {!(image instanceof Object) ? <img alt='' src={image} width="300" /> : null}
            <div className='article-content'>
            
                {article.content && <ReactMarkdown rehypePlugins={[rehypeRaw]} >{article.content}</ReactMarkdown>} 

            </div>
            
            
        </div>
    );
}

export default Article;