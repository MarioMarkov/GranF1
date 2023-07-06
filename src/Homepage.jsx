import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./navigation/LoadingSpinner";

import { useAPI } from "./context/ApiContext";

function Homepage({ i18n }) {
  const { articles } = useAPI();

  return articles.length > 0 ? (
    <div className="w-4/5 mx-auto px-2.5 leading-[1.4] tracking-[-.05em]	">
      <Link
        to={`/articles/${articles[0]._id}`}
        key={`${articles[0]._id}`}
        className=""
      >
        <div className="md:h-[25rem] md:flex md:justify-between shadow-[0_5px_8px_0_rgba(0,0,0,0.2)] rounded-[10px] border-r-[10px] border-r-purple border-b-[10px] border-b-purple border-solid hover:shadow-[0_8px_15px_0_rgba(0,0,0,0.2)]">
          <div className="text-3xl md:text-4xl lg:text-5xl  font-bold p-8 md:px-9 md:pt-4  break-words">
            {i18n.language === "en"
              ? articles[0].en_title
              : articles[0].bg_title}
          </div>

          <img
            rel="preload"
            as="image" 
            className="md:max-w-[35vw] md:h-full object-cover rounded-tl-[10px]"
            src={articles[0].img.src}
            alt=""
          />
        </div>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10  gap-y-[2em] mb-10 mt-8">
        {articles.length > 1 ? (
          articles.slice(1).map((article) => {
            return (
              <div
                className="text-center shadow-[0_5px_8px_0_rgba(0,0,0,0.2)] transition-[0.4s] rounded-lg border-b-[10px] border-b-purple border-solid hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]"
                key={article._id}
              >
                <Link to={`/articles/${article._id}`} key={article._id}>
                  <div>
                    <img
                      className="w-full h-[230px] object-cover rounded-t-lg"
                      src={article.img.src}
                      alt=""
                    />
                    <div className="p-3">
                      <p className="text-lg md:text-xl font-[530]">
                        {" "}
                        {i18n.language === "en"
                          ? article.en_title
                          : article.bg_title}
                        {": "}
                        {i18n.language === "en"
                          ? article.en_content.slice(0, 20)
                          : article.bg_content.slice(0, 20) + "..."}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default Homepage;
