import React, { useReducer, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./navigation/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import LoadingSpinner from "./navigation/LoadingSpinner";
import Articles from "./articles/Articles";
import EditArticle from "./articles/EditArticle";
import { useTranslation } from "react-i18next";
import { APIContextProvider } from "./context/ApiContext";
import articlesReducer from "./context/ArticleReducer";
import AddArticle from "./articles/AddArticle";

const Homepage = lazy(() => import("./Homepage"));
const Article = lazy(() => import("./articles/Article"));

const renderLoader = () => <LoadingSpinner />;

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
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={renderLoader()}>
                  <Homepage i18n={i18n} />
                </Suspense>
              }
            />

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
        </BrowserRouter>
      </APIContextProvider>
      {/* </UserAuthContextProvider> */}
    </div>
  );
}

export default App;
