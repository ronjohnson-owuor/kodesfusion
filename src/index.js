import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './home/Home';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Storylisting from './storieslisting/Storylist';

function App() {




  return (
  <>

  <Routes>
  <Route path="/" element = {<Home/>} />
    <Route path="/storylist" element = {<Storylisting/>} />
  </Routes>
  </>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));
