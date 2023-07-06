import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AddArticle.css";
import { useNavigate } from "react-router-dom";
import storage from "../fireBaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useAPI } from "../context/ApiContext";

function EditArticle({ onEditArticle }) {
  const params = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const { articles } = useAPI();

  // Values set in the input fields
  const [state, setState] = useState({
    _id: "",
    en_title: "",
    bg_title: "",
    en_content: "",
    bg_content: "",
    image_url: "",
    race_review: false,
  });

  useEffect(() => {
    articles.map((a) => {
      if (a._id === params.articleId) {
        setState(a);
      }
    });
  }, [params.articleId]);

  function handleUpload() {
    if (!file) {
      alert("Upload a file");
    }
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setState({ ...state, image_url: url });
        });
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please choose an image first!");
    }
    onEditArticle(state);
    navigate(`/articles/${state._id}`);
  };

  return (
    <div className="px-4">
      <form
        className="w-full p-4 bg-gray-100 rounded-md border-gray-200 border-2	"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="row">
          <div className="col-25">
            <label htmlFor="en_title">English Title</label>
          </div>
          <div className="col-75">
            <input
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
              value={state.en_title}
              type="text"
              name="en_title"
              placeholder="Write Title..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="bg_title"> Bulgarian Title</label>
          </div>
          <div className="col-75">
            <input
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
              value={state.bg_title}
              type="text"
              name="bg_title"
              placeholder="Write Title..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="en_content"> English Content</label>
          </div>
          <div className="col-75">
            <textarea
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
              value={state.en_content}
              type="text"
              name="en_content"
              style={{ height: 200 + "px" }}
              placeholder="Write something.."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="bg_content">Bulgarian Content </label>
          </div>
          <div className="col-75">
            <textarea
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
              type="text"
              value={state.bg_content}
              name="bg_content"
              style={{ height: 200 + "px" }}
              placeholder="Write something.."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="race_review">Race Review</label>
          </div>
          <div className="col-75">
            <input
              type="checkbox"
              checked={state.race_review}
              onChange={() =>
                setState({ ...state, race_review: !state.race_review })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="title">Image</label>
          </div>
          <div className="col-75">
            <div>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept=""
              />
              <button
                type="button"
                className="bg-purple rounded-md text-white p-4"
                onClick={handleUpload}
              >
                Upload to Firebase
              </button>
              <p>{percent} "% done"</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default EditArticle;
