import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Storylisting from './storieslisting/Storylist';
import Weblayout from './storieslisting/stories/Weblayout';
import Betterweb from './storieslisting/stories/Betterweb';

function App() {




  return (
  <>

  <Routes>
  <Route path="/" element = {<Storylisting/>} />
    <Route path="/storylist" element = {<Storylisting/>} />
    <Route path="/weblayout" element = {<Weblayout/>} />
    <Route path="/betterweb" element = {<Betterweb/>} />
  </Routes>
  </>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));
