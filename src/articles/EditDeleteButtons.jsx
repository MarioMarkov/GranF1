import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditDeleteButtons({ article }) {
  const navigate = useNavigate();

  const deleteImage = async (articleId) => {
    if (window.confirm("Are you sure!") === true) {
      let result = await fetch(
        `https://granf1-production.up.railway.app/api/articles/delete/${articleId}`,
        {
          method: "DELETE",
        }
      );
      result = await result.json();
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
        onClick={() => deleteImage(article._id)}
      >
        Delete
      </button>
    </div>
  );
}
