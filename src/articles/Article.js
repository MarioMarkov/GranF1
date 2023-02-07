import axios from 'axios';
import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Article() {

    const params = useParams()
    const [article, setArticle] = useState({});
    const [image, setImage] = useState({})


    const getImage = () => { 
        async function fetchData() { 
            await fetch(`/api/articles/${params.articleId}/image`)
            .then(response => response.blob())
            .then(imageBlob => {
                 console.log(imageBlob)
                // Then create a local URL for that image and print it 
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImage(imageObjectURL)
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
        <div>
            Title : {article.title}   <br />
            Content : {article.content}    <br />
            Image:  {!(image instanceof Object) ?  <img alt=''  src={image} width="300" />: null }
            
            
        </div>
    );
}

export default Article;