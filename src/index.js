import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './home/Home';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Storylisting from './storieslisting/Storylist';
import Love from './storieslisting/stories/Love';
import Farm from './storieslisting/stories/Farm';
import Teen from './storieslisting/stories/Teen';
import Learn from './storieslisting/stories/Learncode';
import Learnanylanguage from './storieslisting/stories/Learnanylanguage';

function App() {




  return (
  <>

  <Routes>
  <Route path="/" element = {<Home/>} />
    <Route path="/storylist" element = {<Storylisting/>} />
    <Route path="/love" element = {<Love/>} />
    <Route path="/farm" element = {<Farm/>} />
    <Route path="/teen" element = {<Teen/>} />
    <Route path="/learntocode" element = {<Learn/>} />
    <Route path="/learnanylanguage" element = {<Learnanylanguage/>} />
  </Routes>
  </>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));
