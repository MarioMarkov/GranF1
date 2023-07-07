import React, { useReducer, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { APIContextProvider } from "./context/ApiContext";
import articlesReducer from "./context/ArticleReducer";

import Navbar from "./navigation/Navbar";
import "./App.css";
import About from "./About";
import Homepage from "./Homepage";
import LoadingSpinner from "./navigation/LoadingSpinner";

import Article from "./articles/Article";
// import EditArticle from "./articles/EditArticle";
// import AddArticle from "./articles/AddArticle";
import Articles from "./articles/Articles";

const EditArticle = lazy(() => import("./articles/EditArticle"));
const AddArticle = lazy(() => import("./articles/AddArticle"));
// const Article = lazy(() => import("./articles/Article"));
// const Articles = lazy(() => import("./articles/Articles"));

function App() {
  const { t, i18n } = useTranslation();

  const [state, dispatch] = useReducer(articlesReducer, {});

  function handleAddArticle(payload) {
    dispatch({
      type: "added",
      payload: payload,
    });
  }

  function handleEditArticle(payload) {
    dispatch({
      type: "edit",
      payload: payload,
    });
  }

  function handleDeleteArticle(payload) {
    dispatch({
      type: "delete",
      payload: payload,
    });
  }

  function changeStatus(payload) {
    dispatch({
      type: "change_status",
      payload: payload,
    });
  }

  return (
    <div className="App">
      {/* <UserAuthContextProvider> */}
      <APIContextProvider>
        <BrowserRouter>
          <Navbar t={t} i18n={i18n}></Navbar>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Homepage i18n={i18n} />} />
              <Route
                path="articles/all/:raceReviews"
                element={<Articles i18n={i18n} />}
              />
              <Route path="about" element={<About i18n={i18n} t={t} />} />
              <Route
                path="articles/:articleId"
                element={
                  <Article
                    changeStatus={changeStatus}
                    onDeleteArticle={handleDeleteArticle}
                    i18n={i18n}
                  />
                }
              />
              <Route
                path="articles/edit/:articleId"
                element={<EditArticle onEditArticle={handleEditArticle} />}
              />
              <Route
                path="add"
                element={<AddArticle onAddArticle={handleAddArticle} />}
              />
              {/* <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} /> */}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </APIContextProvider>
      {/* </UserAuthContextProvider> */}
    </div>
  );
}

export default App;
