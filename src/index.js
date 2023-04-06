import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Storylisting from './storieslisting/Storylist';
import Weblayout from './storieslisting/stories/Weblayout';
import Betterweb from './storieslisting/stories/Betterweb';
import Efficientprogrammer from './storieslisting/stories/Efficientprogrammer';
import Learncoding from './storieslisting/stories/Learncoding';
import Cleancode from './storieslisting/stories/Cleancode';
import Happycoding from './storieslisting/stories/Codinghappily';
import Godtier from './storieslisting/stories/Godtier';
import Weakness from './storieslisting/stories/Weakness';
import Framework from './storieslisting/stories/Framework';
import Responsive from './storieslisting/stories/Responsive';

function App() {




  return (
  <>

  <Routes>
  <Route path="/" element = {<Storylisting/>} />
    <Route path="/storylist" element = {<Storylisting/>} />
    <Route path="/weblayout" element = {<Weblayout/>} />
    <Route path="/betterweb" element = {<Betterweb/>} />
    <Route path="/cleancode" element = {<Cleancode/>} />
    <Route path="/happycoding" element = {<Happycoding/>} />
    <Route path="/learncoding" element = {<Learncoding/>} />
    <Route path="/godtier" element = {<Godtier/>} />
    <Route path="/weakness" element = {<Weakness/>} />
    <Route path="/framework" element = {<Framework/>} />
    <Route path="/responsive" element = {<Responsive/>} />
    <Route path="/betterdeveloper" element = {<Efficientprogrammer/>} />
  </Routes>
  </>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));
