import React ,{ useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import './Articles.css';
import { useParams } from 'react-router-dom';


function Articles() {
    const params = useParams();
    const [articles, setArticles] = useState([]);

    const getArticles = () => { 
        fetch("/api/articles/all/".concat(params.raceReviews))
            .then(resp => resp.json())
            .then(data => { 
                setArticles(data.reverse())
            })
    }

    useEffect(() => {
        console.log(params.raceReviews)
        getArticles()
        
    }, [params.raceReviews])  

    return (
        <div>
             <div className='grid-container'>
                {articles.map((article) => {
                   
                    return (
                        
                        <div className='grid-item article-item' key={article._id}>
                            <Link to={`/articles/${article._id}`} key={article._id}>
                                <div>Title : {article.title}</div>                               
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
        
    );
}

export default Articles;