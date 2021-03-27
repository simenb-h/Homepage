import React from "react"
import {Link} from 'react-router-dom'; // Import the Link component
import robert from "./images/robert1.png";
import finaltry from "./images/finaltry.mp4";
import '../App.css';
import './ProjectCSS.css';

function Robert(props) {
  return (
    <div className="project">
        
    <h1>Eurobot 2020 - Robot</h1>
    <h4>Prosjekt i faget TMM4150 med mål om å lage en robot som kunne konkurert i Eurobot 2020.</h4>
    <video controls autoplay muted>
        <source src={finaltry} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    
    <div className="maintext">
        <h3>Eurobot:</h3><p>Årlig konkuranse hvor lag bygger roboter for å å løse ulike problemer</p>
        <p></p>
    </div >
    
    </div>
  )
}
 
export default Robert;