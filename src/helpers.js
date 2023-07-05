import axios from "axios";
import { config } from "./Constants";

const URL = config.url;

export const getArticles = async () => {
  console.log("fetching");
  let data = await axios
    .get(`${URL}/api/articles/all`)
    .then((response) => {
      let data = response.data;
      data.map((article) => {
        const img = new Image();
        img.src = article.image_url;
        article.img = img;
        return article;
      });
      if (process.env.NODE_ENV === "production") {
        data = data.filter((article) => {
          return article.public === true;
        });
      }

      data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      return data;
    })
    .catch((err) => console.log(err));

  return data;
};
