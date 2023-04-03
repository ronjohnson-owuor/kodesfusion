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
import Saving from './storieslisting/stories/Saving';
import Savingtough from './storieslisting/stories/Savingtough';
import Gratitude from './storieslisting/stories/Gratitude';
import Purpose from './storieslisting/stories/Purpose';
import Goals from './storieslisting/stories/Goals';
import Mindfulness from './storieslisting/stories/Mindfulness';
import Communication from './storieslisting/stories/Communication';
import Healthyhabits from './storieslisting/stories/Healthyhabits';
import Selfreflection from './storieslisting/stories/Selfreflection';
import Lettinggo from './storieslisting/stories/Lettinggo';
import Optimism from './storieslisting/stories/Optimism';
import Financialsuccess from './storieslisting/stories/Financialsuccess';
import Leadership from './storieslisting/stories/Leadership';
import Contactus from './reachus/Contactus';
import About from './reachus/Aboutus';
import Terms from './reachus/Terms';
import Policy from './reachus/Policy';

function App() {




  return (
  <>

  <Routes>
  <Route path="/" element = {<Home/>} />
    <Route path="/storylist" element = {<Storylisting/>} />
    <Route path="/love" element = {<Love/>} />
    <Route path="/contactus" element = {<Contactus/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/terms" element = {<Terms/>} />
    <Route path="/policy" element = {<Policy/>} />
    <Route path="/farm" element = {<Farm/>} />
    <Route path="/teen" element = {<Teen/>} />
    <Route path="/saving-without-sacrifice" element = {<Saving/>} />
    <Route path="/saving-on-a-tight-budget" element = {<Savingtough/>} />
    <Route path="/learntocode" element = {<Learn/>} />
    <Route path="/goals" element = {<Goals/>} />
    <Route path="/financial-success" element = {<Financialsuccess/>} />
    <Route path="/optimism" element = {<Optimism/>} />
    <Route path="/art-of-letting-go" element = {<Lettinggo/>} />
    <Route path="/self-reflection" element = {<Selfreflection/>} />
    <Route path="/healthyhabits" element = {<Healthyhabits/>} />
    <Route path="/communication" element = {<Communication/>} />
    <Route path="/mindfulness" element = {<Mindfulness/>} />
    <Route path="/purpose" element = {<Purpose/>} />
    <Route path="/powerofgratitude" element = {<Gratitude/>} />
    <Route path="/learnanylanguage" element = {<Learnanylanguage/>} />
    <Route path="/leadership" element = {<Leadership/>} />

  </Routes>
  </>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));
