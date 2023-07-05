import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { config } from "../Constants";

const URL = config.url;
const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios
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

      setArticles(data);
    }
    console.log("fetching");
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        articles,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
