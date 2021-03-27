import React from "react"
import {Link} from 'react-router-dom'; // Import the Link component
import './Navbar.css';

function Navbar(props) {
  return (
 
    <div className="nav-container">
    <nav >
        <ul>
            <li>
            <Link to="/">
                <p>HJEM</p>
            </Link>
            </li>

            <li>    
            <Link to="/aboutme">
                <p>OM MEG</p>
            </Link>
            </li>
            <li>    
            <Link to="/Prosjekter">
                <p>PROSJEKTER</p>
            </Link>
            </li>


        </ul>


    </nav>
    </div>
    
  )
}
 
export default Navbar;