import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from './components/Main';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Main/>
      </div>
      <div className="fixed-action-btn">
        <Link to="/meetups/add" className="btn-floating btn-large red">
          <i className="fa fa-plus"/>
        </Link>
      </div>
    </div>
  )
};

export default App;
