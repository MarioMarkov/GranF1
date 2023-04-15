import React ,{ useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { config } from '../Constants';
import LoadingSpinner from "../navigation/LoadingSpinner";

const URL = config.url;

function Articles({ i18n }) {
    const params = useParams();
    const [articles, setArticles] = useState([]);

    const getArticles = async () => { 
        await fetch(`${URL}/api/articles/all/`.concat(params.raceReviews))
            .then(resp => resp.json())
            .then(data => { 
                if(process.env.NODE_ENV === "production"){
                    data = data.filter((article) => {
                        return article.public === true
                    })

                }
                setArticles(data.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                }))
            })
    }

    useEffect( () => {
        getArticles()
    }, [params.raceReviews])  

    return articles.length >0 ? (
        <div className='w-[90%] mx-auto mb-10'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-12 gap-y-[3em] w-[80%] md:w-[90%] mx-auto'>
                {articles.map((article) => {
                   
                    return (
                        
                        <div className="text-center shadow-[0_5px_8px_0_rgba(0,0,0,0.2)] transition-[0.4s] rounded-[10px] border-b-[10px] border-b-purple border-solid hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]" key={ article._id}>
                        <Link to={`/articles/${article._id}`} key={ article._id}>
        
                          <div>
                              <img className='w-full h-[230px] object-cover rounded-t-lg' src={article.image_url} alt='' />
                                <div className='p-3'>
                                  <p className='text-2xl font-semibold'> { i18n.language ==="en" ? article.en_title : article.bg_title}  </p>
                                  <p>{ i18n.language ==="en" ? article.en_content.slice(0,40):article.bg_content.slice(0,40)  + '...'  }</p>
                                </div>
                                
                            </div>
                          </Link>
                      </div>
                    );
                })}
            </div>
        </div>
        
    ):(
        <LoadingSpinner  />
    );
}

export default Articles;