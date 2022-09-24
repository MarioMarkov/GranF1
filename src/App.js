import './App.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './Homepage';
import Navbar from './navigation/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>
    </div>
    
    
  );
}

export default App;
