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

   
    return article.content ? (
        <div className='flex flex-col w-9/12 mx-auto'>
            {process.env.NODE_ENV === 'development' ?
                <EditDeleteButtons article = {article}/>:
                <></>
            }
            {/* //rounded border-purple-600 border-r-[10px] border-r-[#6246ea] border-b-[10px] border-b-[#6246ea] border-solid */}
            <div className = "text-center text-7xl mx-auto w-9/12 font-bold mb-8 underline decoration-purple leading-[1.3]">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} >
                    {article.title}
                </ReactMarkdown>
            </div>
            <div className='text-center '>
                <img className='mx-auto w-9/12 rounded-md' alt='Article image' src={article.image_url}/> 
            </div>
           

             <div className=' mx-auto text-xl my-6 w-9/12 text-[1.3rem] font-medium leading-[1.8] '>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} >
                    {article.content}
                </ReactMarkdown>
            </div>
        </div>
    ) :
     <LoadingSpinner/>
}

export default Article;