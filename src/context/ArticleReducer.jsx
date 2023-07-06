import axios from "axios";
import { config } from "../Constants";
const URL = config.url;

const articlesReducer = (article_state, action) => {
  const article_props = action.payload;
  
  switch (action.type) {
    case "added": {
      const addArticle = async (article) => {
        try {
          await axios.post(`${URL}/api/articles`, article);
        } catch (err) {
          console.log(err);
        }
      };
      addArticle(article_props);
      return "Ok";
    }
    case "edit": {
      const editArticle = async (article) => {
        try {
          await axios.post(`${URL}/api/articles/edit/${article._id}`, article);
        } catch (err) {
          console.log(err);
        }
      };

      editArticle(article_props);
      return "Ok";
    }
    case "delete": {
      const deleteArticle = async (articleId) => {
        try {
          await axios.delete(`${URL}/api/articles/delete/${articleId}`);
        } catch (err) {
          console.log(err);
        }
      };

      deleteArticle(article_props);
      return "Ok";
    }
    case "change_status": {
      const changeStatus = async (article_props) => {
        try {
          await axios.post(
            `${URL}/api/articles/make_public/${article_props.status}/${article_props.articleId}`
          );
        } catch (err) {
          console.log(err);
        }
      };
      changeStatus(article_props);
      return "Ok";
    }
  }
};

export default articlesReducer;
