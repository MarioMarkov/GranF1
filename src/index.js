import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Article from './Article';
import About from './About';
import Stories from './stories/Stories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="stories" element={<Stories />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


