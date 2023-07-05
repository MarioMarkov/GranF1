import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { config } from "../Constants";
import EditDeleteButtons from "./EditDeleteButtons";
import LoadingSpinner from "../navigation/LoadingSpinner";

const URL = config.url;

function Article({ i18n }) {
  const params = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${URL}/api/articles/`.concat(params.articleId))
        .then((response) => {
          setArticle(response.data);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, [params.articleId]);

  return article.image_url ? (
    <div className="flex flex-col md:w-[60%] w-[95%] mx-auto ">
      {process.env.NODE_ENV === "development" && (
        <div className="self-end">
          <EditDeleteButtons article={article} URL={URL} />
        </div>
      )}
      <div className="text-center md:text-[4rem]  font-bold mb-8 underline decoration-purple leading-[1.3] text-3xl">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {i18n.language === "en" ? article.en_title : article.bg_title}
        </ReactMarkdown>
      </div>
      <div className="">
        <img
          className="object-cover rounded-md mb-6 "
          alt="Race highlight"
          src={article.image_url}
        />
      </div>

      <div className=" text-[18px] md:text-[20px] md:my-6 font-medium leading-[1.7]">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {i18n.language === "en" ? article.en_content : article.bg_content}
        </ReactMarkdown>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default Article;
