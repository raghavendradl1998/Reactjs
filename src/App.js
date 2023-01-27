import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Emarketingpage from './components/Navbar/Emarketingpage';
import About from './components/Navbar/About'
import Emailmarketing from './components/Navbar/Emailmarketing';
import Affiliate from './components/Navbar/affiliate';
import Socialmedia from './components/Navbar/Socialmedia';


import Contact from './components/Contact/Contact'

  
function App() {
  return (
    <>
   
    <Router>
      <Navbar/>
    <Routes>
    <Route exact path="/"  element ={<Emarketingpage/>}/>
      <Route exact path="/ec"  element ={<Emailmarketing/>}/>
      <Route exact path="/ad"  element ={<About/>}/>
      <Route exact path="/ap"  element ={<Affiliate/>}/>
      <Route exact path="/sc"  element ={<Socialmedia/>}/>


      <Route exact path="/contact"  element ={<Contact/>}/>
  
    
    </Routes>
    </Router>
    </>
    
  );
}
  
export default App;