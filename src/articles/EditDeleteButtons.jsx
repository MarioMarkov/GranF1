import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditDeleteButtons({ article, URL }) {
  const navigate = useNavigate();

  const deleteArticle = async (articleId) => {
    if (window.confirm("Are you sure!") === true) {
      let result = await axios.delete(
        `${URL}/api/articles/delete/${articleId}`
      );
      if (result) {
        navigate("/");
      }
    } else {
      return;
    }
  };

  const changePublicStatus = async (articleId, status) => {
    if (window.confirm("Are you sure!") === true) {
      let result = await axios.post(
        `${URL}/api/articles/make_public/${status}/${articleId}`
      );

      if (result) {
        navigate("/");
      }
    } else {
      return;
    }
  };

  return (
    <div>
      <Link
        className="rounded-full"
        to={`/articles/edit/${article && article._id}`}
      >
        <button className="bg-purple rounded-full p-2 text-white">
          Edit Article
        </button>
      </Link>

      <button
        className="bg-purple rounded-full p-2 text-white"
        onClick={() => deleteArticle(article._id)}
      >
        Delete
      </button>

      <button
        className="bg-green-500 rounded-full p-2 text-white"
        onClick={() => changePublicStatus(article._id, true)}
      >
        Publish to public
      </button>

      <button
        className="bg-red-600 rounded-full p-2 text-white"
        onClick={() => changePublicStatus(article._id, false)}
      >
        Remove from public
      </button>

      <input
        className="appearance-none checked:bg-blue-500 "
        type="checkbox"
        defaultChecked={article.public}
      />
    </div>
  );
}