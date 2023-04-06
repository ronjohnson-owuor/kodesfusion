import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Storylisting from './storieslisting/Storylist';
import Communication from './storieslisting/stories/Communication';

function App() {




  return (
  <>

  <Routes>
  <Route path="/" element = {<Storylisting/>} />
    <Route path="/storylist" element = {<Storylisting/>} />
    <Route path="/communication" element = {<Communication/>} />
  </Routes>
  </>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));
