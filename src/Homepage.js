import React ,{ useState ,useEffect} from 'react';
//import image from './ressources/max.png';
import './Homepage.css';
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
      
      <div className="w-4/5 overflow-auto m-auto p-2.5 ">
        
        <Link to={ `/articles/${articles[0]._id}` }
          key={`/articles/${articles[0]._id}`}>
        <div className='h-[25rem] flex justify-between shadow-[0_5px_8px_0_rgba(0,0,0,0.2)] mb-[5%] rounded-[10px] border-r-[10px] border-r-[#6246ea] border-b-[10px] border-b-[#6246ea] border-solid hover:shadow-[0_8px_15px_0_rgba(0,0,0,0.2)]'>
        
        <div className='text-[3.5rem] leading-[1.15] font-bold p-10'>
            {articles[0].title }  
          </div>

        <div className='picture'>
            <img className='showcase-img' src={articles[0].image_url}  alt="" />
        </div>
          
        </div>
        </Link>
        <div className="grid-container">
          {articles.length > 1 ? articles.slice(1).map(article => { 
            return (
              <div className="grid-item" key={ article._id}>
                <Link to={`/articles/${article._id}`} key={ article._id}>

                  <div className="post-card">
                      <img className='article-img' src={article.image_url} alt='' />
                        <div className='card-text'>
                          <p className='text-2xl font-semibold'> { article.title }  </p>
                          <p className=''>{ article.content.slice(0,60) + '...'  }</p>
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