import React from 'react';
import image from "./images/simen.jpg";



const Aboutme = () =>   {
    return (
    <div>
        <p>Simen Berg-Hansen</p>
        <img width="25%" height="25%" border-radius="100px" src={image} alt="" />
    </div>
    );
}

export default Aboutme;
