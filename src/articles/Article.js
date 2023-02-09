import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Article.css'
import ReactMarkdown from 'react-markdown'


function Article() {

    const params = useParams()
    const [article, setArticle] = useState({});
    const [image, setImage] = useState({})


    const getImage = () => { 
        async function fetchData() { 
            await fetch(`/api/articles/${params.articleId}/image`)
            .then(response => response.blob())
            .then(imageBlob => {
                // Then create a local URL for that image and print it 
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImage(imageObjectURL)
                console.log(imageObjectURL)
            })
        }

        fetchData()
    }
    
    useEffect(() => {

        async function fetchData() {
            await axios.get("/api/articles/".concat(params.articleId))
                .then(response => {
                    setArticle(response.data)
                })
                .catch((err) => console.log(err));
        }
        fetchData();
        getImage();
        
    }, [params.articleId])



  
    // useEffect(() => {
    //     try {
    //         async function fetchData() { 
    //             await fetch(`/api/articles/${params.articleId}/image`)
    //             .then(response => response.blob())
    //             .then(imageBlob => {
    //                  console.log(imageBlob)
    //                 // Then create a local URL for that image and print it 
    //                 const imageObjectURL = URL.createObjectURL(imageBlob);
    //                 setImage(imageObjectURL)
    //             })
    //         }

    //         fetchData()
    //     } catch (error) {
    //         console.log("error in fetching image")

    //     }
        
    // }, [params.articleId]) 

    
   
    return (
        <div className='article-content'>
            <div className = "article-title">
                 {article.title}
            </div>
            <div className='article-image'>

            </div>
                {!(image instanceof Object) ? <img alt='' src={image} width="300" /> : null}
            <div className='article-content'>
            
                {article.content && <ReactMarkdown >{article.content}</ReactMarkdown> } 

            </div>
            
            
        </div>
    );
}

export default Article;