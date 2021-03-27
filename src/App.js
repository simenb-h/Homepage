import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Robert from "./components/Robert"
import Nettside from "./components/Nettside"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Aboutme from "./components/Aboutme"
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route exact path ="/" >
        <Header/>
        <Projects title = "Siste prosjekter:" antall='6' />
      </Route>
      <Route path ="/Robert" component={Robert} />
      <Route path ="/Nettside" component={Nettside} />
      <Route path ="/Aboutme">
        <Header/>
        <Aboutme/>
      </Route>
      <Route path ="/Prosjekter">
        <Projects title = "Alle prosjekter:"  />
      </Route>
      <header className="App-header">
      </header>
      <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
