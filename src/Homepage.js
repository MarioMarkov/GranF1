import React ,{ useState ,useEffect} from 'react';
//import image from './ressources/max.png';
import './Homepage.css';
import { Link } from "react-router-dom";
import axios from 'axios';


function Homepage() {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    // Getting all articles 
    async function fetchArticles() { 
      await axios.get("/api/articles/all")
        .then(response => {
        setArticles(response.data)
    }).catch((err) => console.log(err));
    }
    fetchArticles();
  }, []);
  
  const getImage = (index) => { 
    return articles.length >index-1 ? articles[articles.length-index].image_url : null
  }


    return (
      
      <div className="main-content">
        
        <Link to={articles.length > 0 ? `/articles/${articles[articles.length - 1]._id}` : "#"}
          key={articles.length > 0 ? `/articles/${articles[articles.length - 1]._id}` : "#"}>
        <div className='showcase'>
          <div className='picture'>
            <img className='showcase-img' src={getImage(1)}  alt="" />
          </div>
          <div className='title'>
            {articles.length >0 ? articles[articles.length-1].title : null}  
          </div>
        </div>
        </Link>
        <div className="grid-container">
          {articles.length > 0 ? articles.slice(-7).reverse().slice(1).map(article => { 
            return (
              <div className="grid-item" key={ article._id}>
                <Link to={`/articles/${article._id}`} key={ article._id}>

                  <div className="post-card">
                      <img className='article-img' src={article.image_url} alt='' />
                        <div className='card-text'>
                          <h3><p> { article.title }  </p></h3>
                          <p>{ article.content.slice(0,40) + '...'  }</p>
                        </div>
                        
                    </div>
                  </Link>
              </div>
           
            )
           
          } ):null}
            
        </div>
      </div>
    );
}

export default Homepage;