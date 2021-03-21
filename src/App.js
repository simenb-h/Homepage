import './App.css';
import React, { useState, useEffect } from 'react';
import Project from "./components/Project";
import Aboutme from "./components/Aboutme";

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
