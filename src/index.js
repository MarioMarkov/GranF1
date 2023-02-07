import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';
import Article from './articles/Article';
import Articles from './articles/Articles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="articles" element={<Articles />} />
      <Route path="about" element={<About />} />
      <Route path="articles/:articleId" element={<Article />} />
    </Routes>
  </BrowserRouter>
);


