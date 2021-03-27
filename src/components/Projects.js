import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import image from "./images/robert1.png";
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
        <h1>{props.title}</h1>
    <div className="thumb-container">
        <Thumbnail
            link = "/Robert"
            image = {image}
            title = "Robert"
            category = "En robot bygd i faget TMM4150 Maskinkonstruksjon og mekatronikk som skulle kunne konkurert i Eurobot 2020 konkuransen."
       />
      

    </div>
    </div>
  )
}

//Lag en default for antall som en props = alle 
 
export default Projects;