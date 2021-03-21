import './App.css';
import React, { useState, useEffect } from 'react';
import ProjectDisplay from "./components/ProjectDisplay";
import Aboutme from "./components/Aboutme";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Aboutme/>
      </header>
      <body className="App-body">
        <ProjectDisplay/>
      </body>
    </div>
  );
}

export default App;
