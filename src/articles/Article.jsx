import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import EditDeleteButtons from "./EditDeleteButtons";
import LoadingSpinner from "../navigation/LoadingSpinner";
import { useAPI } from "../context/ApiContext";
import remarkGfm from "remark-gfm";

function Article({ changeStatus, i18n, onDeleteArticle }) {
  const params = useParams();
  const [article, setArticle] = useState({});
  const { articles } = useAPI();

  useEffect(() => {
    articles.forEach((a) => {
      if (a._id === params.articleId) {
        setArticle(a);
      }
    });
  }, [params.articleId, articles]);

  return article ? (
    <div className="flex flex-col md:w-[60%] w-[95%] mx-auto ">
      {!import.meta.env.PROD && (
        <div className="self-end">
          <EditDeleteButtons
            changeStatus={changeStatus}
            onDeleteArticle={onDeleteArticle}
            article={article}
          />
        </div>
      )}
      <div className="text-center md:text-[4rem]  font-bold mb-8 underline decoration-purple leading-[1.3] text-3xl">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {i18n.language === "en" ? article.en_title : article.bg_title}
        </ReactMarkdown>
      </div>
      <div className="">
        <img
          rel="preload"
          as="image"
          className="object-cover rounded-md mb-6 "
          alt="Race highlight"
          src={article.image_url}
        />
      </div>

      <div className=" text-[18px] md:text-[20px] md:my-6 font-medium leading-[1.7]">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {i18n.language === "en" ? article.en_content : article.bg_content}
        </ReactMarkdown>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default Article;
