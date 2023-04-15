import React ,{ useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { config } from './Constants';
import LoadingSpinner from "./navigation/LoadingSpinner";


const URL = config.url;

function Homepage() {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    // Getting all articles 
    async function fetchArticles() { 
      await axios.get(`${URL}/api/articles/all`)
        .then(response => {
        
          setArticles(response.data.sort((a, b) => { 
            return new Date(b.date) - new Date(a.date);
          }))
    
    }).catch((err) => console.log(err));
    }
    fetchArticles();
  }, []);
  



    return articles.length > 0 ? (
      
      <div className="w-4/5 mx-auto px-2.5 ">
        
        <Link to={ `/articles/${articles[0]._id}` }
          key={`/articles/${articles[0]._id}`} className=''>
        <div className='md:h-[25rem] md:flex  md:justify-between shadow-[0_5px_8px_0_rgba(0,0,0,0.2)] rounded-[10px] border-r-[10px] border-r-purple border-b-[10px] border-b-purple border-solid hover:shadow-[0_8px_15px_0_rgba(0,0,0,0.2)]'>
        
        <div className='text-3xl md:text-6xl leading-[1.4] font-bold p-8 md:px-9 md:pt-10  break-words'>
            { articles[0].title }  
        </div>

        <img className='md:max-w-[35vw] md:h-full object-cover rounded-tl-[10px]' src={articles[0].image_url}  alt="" />
        
          
        </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10  gap-y-[2em] mb-10 mt-8">
          {articles.length > 1 ? articles.slice(1).map(article => { 
            return (
              <div className="text-center shadow-[0_5px_8px_0_rgba(0,0,0,0.2)] transition-[0.4s] rounded-lg border-b-[10px] border-b-purple border-solid hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]" key={ article._id}>
              <Link to={`/articles/${article._id}`} key={ article._id}>

                <div >
                    <img className='w-full h-[230px] object-cover rounded-t-lg' src={article.image_url} alt='' />
                      <div  className='p-2'>
                        <p className='text-lg md:text-xl font-semibold'> { article.title }  </p>
                        <p className='text-base md:text-lg'>{ article.content.slice(0,40) + '...'  }</p>
                      </div>
                      
                  </div>
                </Link>
            </div>
           
            )
           
          } ):<p></p>}
            
        </div>
      </div>
    ): (
      <LoadingSpinner />
    );
}

export default Homepage;