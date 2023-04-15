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

function App() {
  const [lang, setLang] = useState("en");
  
  return (
    <div className="App">
      <UserAuthContextProvider>
      <BrowserRouter>
      <Navbar lang={ lang } setLang = {setLang}></Navbar>
        <Routes >
          
          <Route path="/" element={<Homepage lang={lang} />} />
          <Route path="articles/all/:raceReviews" element={<Articles lang={lang}/>} />
          <Route path="about" element={<About lang={lang}/>} />
          <Route path="articles/:articleId" element={<Article lang={lang}/>} />
          <Route path="articles/edit/:articleId" element={<EditArticle lang={lang}/>} />
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