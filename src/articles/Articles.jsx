import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { config } from "../Constants";
import LoadingSpinner from "../navigation/LoadingSpinner";
import {
  ArticlesContext,
  ArticlesDispatchContext,
} from "../context/ArticleContext";

const URL = config.url;

function Articles({ i18n }) {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  const articlesFromContext = useContext(ArticlesContext).then((data) =>
    setArticles(data)
  );

  useEffect(() => {
    console.log("useEffFrom Articles");
    // filter for the race reviews param
  }, [params.raceReviews]);

  return articles.length > 0 ? (
    <div className="w-[90%] mx-auto mb-10 leading-[1.3]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-10 gap-y-[3em] w-[80%] md:w-[90%] mx-auto">
        {articles.map((article) => {
          return (
            <div
              className="text-center shadow-[0_5px_8px_0_rgba(0,0,0,0.2)] transition-[0.4s] rounded-[10px] border-b-[10px] border-b-purple border-solid hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]"
              key={article._id}
            >
              <Link to={`/articles/${article._id}`} key={article._id}>
                <div>
                  <img
                    className="w-full h-[220px] object-cover rounded-t-lg"
                    src={article.img.src}
                    alt=""
                  />
                  <div className="py-3 px-[5px]">
                    <p className="text-[1.5rem] font-[600]">
                      {" "}
                      {i18n.language === "en"
                        ? article.en_title
                        : article.bg_title}{" "}
                    </p>
                    {/* <p>{ i18n.language ==="en" ? article.en_content.slice(0,40):article.bg_content.slice(0,40)  + '...'  }</p> */}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default Articles;
