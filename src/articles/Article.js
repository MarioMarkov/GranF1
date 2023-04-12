import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
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
        <div className='flex flex-col xl:w-9/12 xl:mx-auto mx-7'>
            {process.env.NODE_ENV === 'development' ?
                <EditDeleteButtons className = 'float-right' article = {article}/>:
                <></>
            }
            {/* //rounded border-purple-600 border-r-[10px] border-r-[#6246ea] border-b-[10px] border-b-[#6246ea] border-solid */}
            <div className = "text-center xl:text-7xl xl:mx-auto xl:w-9/12 font-bold mb-8 underline decoration-purple leading-[1.3] text-3xl">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} >
                    {article.title}
                </ReactMarkdown>
            </div>
            <div className='text-center '>
                <img className='xl:mx-auto xl:w-9/12 rounded-md mb-8' alt='Article image' src={article.image_url}/> 
            </div>
           

             <div className='xl:mx-auto xl:my-6 xl:w-9/12 xl:text-[20px] text-[18px] font-medium leading-[1.7] '>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} >
                    {article.content}
                </ReactMarkdown>
            </div>
        </div>
    ) :
     <LoadingSpinner/>
}

export default Article;