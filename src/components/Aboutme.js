import React from 'react';
import image from "./images/simen2.jpg";
import './About.css';


const Aboutme = () =>   {
    return (
    <div className="top">
        <p className="title">Simen Berg-Hansen</p>
        <p className="maintext">Studerer Ingenørvitenskap og IKT (4.klasse)</p>
        <img src={image} alt="" />
    </div>
    );
}

export default Aboutme;
