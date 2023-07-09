import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

let URL = "";
if (import.meta.env.PROD) {
  URL = import.meta.env.VITE_API_URL;
}
const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // try {
      //   console.log(await axios.get("/api/v1/configurations"))
      // } catch (e) {
      //   console.log(e)
      // }
      console.log(URL);
      await axios
        .get(`${URL}/api/articles/all`)
        .then((response) => {
          let data = response.data;
          // data.map((article) => {
          //   const img = new Image();
          //   img.src = article.image_url;
          //   article.img = img;
          //   return article;
          // });

          if (import.meta.env.PROD) {
            data = data.filter((article) => {
              return article.public === true;
            });
          }

          data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
          setArticles(data);
        })
        .catch((err) => console.log(err));
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
