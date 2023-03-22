import React ,{ useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import './Articles.css';
import { useParams } from 'react-router-dom';
import { config } from '../Constants';

const URL = config.url;

function Articles() {
    const params = useParams();
    const [articles, setArticles] = useState([]);

    const getArticles = async () => { 
        await fetch(`${URL}/api/articles/all/`.concat(params.raceReviews))
            .then(resp => resp.json())
            .then(data => { 
                setArticles(data.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                }))
            })
    }

    useEffect( () => {
        getArticles()
    }, [params.raceReviews])  

    return (
        <div className='main-content'>
             <div className='grid-container'>
                {articles && articles.map((article) => {
                   
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
                    );
                })}
            </div>
        </div>
        
    );
}

export default Articles;