import React ,{ useState ,useEffect} from 'react';
//import image from './ressources/max.png';
import image from './ressources/black.png';
import './Homepage.css';
import { Link } from "react-router-dom";
import axios from 'axios';


function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Getting all articles 
    async function fetchArticles() { 
      await axios.get("/api/articles/")
      .then(response => {
        response.data.map(a => {
        
          async function fetchData(a) { 
            await fetch(`/api/articles/${a._id}/image`)
            .then(response => response.blob())
              .then(imageBlob => { 
                const image_url = URL.createObjectURL(imageBlob)
                a.image = image_url 
              })
          }
         
          fetchData(a)
          return a
        })
        setArticles(response.data)
    }).catch((err) => console.log(err));
    }

    fetchArticles();
    console.log(articles)
  }, []);
  
  
    return (
      
      <div className= "main-content">
        <Link to ='/articles'>
        <div className='showcase'>
          <div className='picture'>
            <img className='article-img' src={articles.length >0 ? articles[articles.length-1].image: null }   alt="" />
          </div>
          <div className='title'>
            {articles.length >0 ? articles[articles.length-1].title : null}  
          </div>
        </div>
        </Link>
      <div id="posts">
            <div id="post1" className="post">
          <div className="post-card">
              <img className='article-img' src={image} alt='' />
                <div className='card-text'>
                  <h3><p>A Super Wonderful Headline</p></h3>
                  <p>Lorem ipsum sit dolor amit</p>
                </div>
                
              </div>
            </div>
            <div id="post2" className="post">
              <div className="post-card">
                <img  className='article-img' src={image} alt=''/>
                <div className='card-text'>
                  <h3><p >A Super Wonderful Headline</p></h3>
                  <p>Lorem ipsum sit dolor amit</p>
                </div>
              </div>
            </div>
            <div id="post3" className="post">
              <div className="post-card">
                <img className='article-img'  src={image} alt=''/>
                <div className='card-text'>
                  <h3><p >A Super Wonderful Headline</p></h3>
                  <p>Lorem ipsum sit dolor amit</p>
                </div>
              </div>
            </div>
</div>
        </div>
    );
}

export default Homepage;