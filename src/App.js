import './App.css';
import React, { useState, useEffect } from 'react';
//import Aboutme from "./components/Aboutme";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Aboutme/>
        <Project/>
      </header>
    </div>
  );
}

export default App;
