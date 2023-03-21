import React ,{ useState ,useEffect} from 'react';
//import image from './ressources/max.png';
import './Homepage.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { config } from './Constants';

const URL = config.url;

function Homepage() {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    // Getting all articles 
    async function fetchArticles() { 
      await axios.get(`${URL}/api/articles/all`)
        .then(response => {
          console.log(URL)
          setArticles(response.data.sort((a, b) => { 
            return new Date(b.date) - new Date(a.date);
          }))
    
    }).catch((err) => console.log(err));
    }
    fetchArticles();
  }, []);
  



    return (
      
      <div className="main-content">
        
        <Link to={articles.length > 0 ? `/articles/${articles[0]._id}` : "#"}
          key={articles.length > 0 ? `/articles/${articles[0]._id}` : "#"}>
        <div className='showcase'>
          <div className='picture'>
            <img className='showcase-img' src={articles.length > 0 ?  articles[0].image_url: '#'}  alt="" />
          </div>
          <div className='title'>
            {articles.length >0 ? articles[0].title : null}  
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
                          <p className='card-title'> { article.title }  </p>
                          <p className='text-preview'>{ article.content.slice(0,60) + '...'  }</p>
                        </div>
                        
                    </div>
                  </Link>
              </div>
           
            )
           
          } ):<p></p>}
            
        </div>
      </div>
    );
}

export default Homepage;