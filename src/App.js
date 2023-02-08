import './App.css';
import Homepage from './Homepage';
import Navbar from './navigation/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';
import Article from './articles/Article';
import Articles from './articles/Articles';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          
      <Route path="/" element={<Homepage />} />
      <Route path="articles" element={<Articles />} />
      <Route path="about" element={<About />} />
      <Route path="articles/:articleId" element={<Article />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;