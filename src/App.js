import React from 'react';
//import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
