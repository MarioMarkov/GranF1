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
import EditArticle from './articles/EditArticle';
import AddArticle from './articles/AddArticle';
import SignUp from './auth/SignUp.js';
import Login from './auth/Login';
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          
          <Route path="/" element={<Homepage />} />
          <Route path="articles" element={<Articles />} />
          <Route path="about" element={<About />} />
          <Route path="articles/:articleId" element={<Article />} />
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