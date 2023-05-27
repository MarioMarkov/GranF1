import './App.css';
import Homepage from './Homepage';
import Navbar from './navigation/Navbar';
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';
import Article from './articles/Article';
import Articles from './articles/Articles';
import EditArticle from './articles/EditArticle';
import AddArticle from './articles/AddArticle';
import SignUp from './auth/SignUp.js';
import Login from './auth/Login';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <UserAuthContextProvider>
      <BrowserRouter>
      <Navbar  t ={t} i18n = {i18n}></Navbar>
        <Routes >
          
          <Route path="/" element={<Homepage i18n={i18n} />} />
          <Route path="articles/all/:raceReviews" element={<Articles i18n={i18n}/>} />
          <Route path="about" element={<About i18n={i18n} t={t}/>} />
          <Route path="articles/:articleId" element={<Article i18n={i18n}/>} />
          <Route path="articles/edit/:articleId" element={<EditArticle />} />
          <Route path="add" element={<AddArticle />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
      </UserAuthContextProvider>
      
    </div>
  );
}

export default App;