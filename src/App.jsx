import React from "react";
import "./App.css";
import Navbar from "./navigation/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Article from "./articles/Article";
import Articles from "./articles/Articles";
import EditArticle from "./articles/EditArticle";
import AddArticle from "./articles/AddArticle";
import Homepage from "./Homepage";
import { useTranslation } from "react-i18next";
import { APIContextProvider } from "./context/ApiContext";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      {/* <UserAuthContextProvider> */}
      <APIContextProvider>
        <BrowserRouter>
          <Navbar t={t} i18n={i18n}></Navbar>
          <Routes>
            <Route path="/" element={<Homepage i18n={i18n} />} />

            <Route
              path="articles/all/:raceReviews"
              element={<Articles i18n={i18n} />}
            />
            <Route path="about" element={<About i18n={i18n} t={t} />} />
            <Route
              path="articles/:articleId"
              element={<Article i18n={i18n} />}
            />
            <Route path="articles/edit/:articleId" element={<EditArticle />} />
            <Route path="add" element={<AddArticle />} />
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