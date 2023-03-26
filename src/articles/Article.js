import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Article.css'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import { config } from '../Constants';
import EditDeleteButtons from './EditDeleteButtons';
import LoadingSpinner from '../navigation/LoadingSpinner';
const URL = config.url;



function Article() {

    const params = useParams()
    const [article, setArticle] = useState({});
  
    useEffect(() => {
        
        async function fetchData() {
            await axios.get(`${URL}/api/articles/`.concat(params.articleId))
                .then(response => {
                    setArticle(response.data)
                })
                .catch((err) => console.log(err));
        }
        fetchData();
        
    }, [params.articleId])

   
    return article ? (
        <div className='flex flex-col w-5/6 mx-auto'>
            {process.env.NODE_ENV === 'development' ?
                <EditDeleteButtons article = {article}/>:
                <></>
            }
            {/* //rounded border-purple-600 border-r-[10px] border-r-[#6246ea] border-b-[10px] border-b-[#6246ea] border-solid */}
            <div className = "text-center text-7xl ">
                 {article.title}
            </div>
            <div className='text-center p-3  '>
                <img className='mx-auto w-5/6' alt='' src={article.image_url} width="300" /> 
            </div>
           

             <div className='text-center   mx-auto text-xl my-6'>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} >
                    {article.content}
                </ReactMarkdown>
            </div>
        </div>
    ) :
     <LoadingSpinner/>
}

export default Article;