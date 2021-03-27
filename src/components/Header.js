import React from 'react';
import image from "./images/simen2.jpg";
import linkdin from "./images/linkdin.svg";
import '../App.css';
import {Link} from 'react-router-dom'; // Import the Link component


const Header = () =>   {


    return (
    <div className="top">
        <p className="title">Simen Berg-Hansen</p>
        <p style={{fontSize:'2rem'}}>Studerer Ingenørvitenskap og IKT (4.klasse) på NTNU Trondheim</p>
        <div className="parent">
            <Link to={"/"}>
                <img id="profil" src={image} alt="" /> 
            </Link>
        </div>
    </div>
    );
}

export default Header;
