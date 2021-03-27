import React from "react"
import {Link} from 'react-router-dom'; // Import the Link component
import '../App.css';

function Thumbnail(props) {
  return (
      <Link to={props.link}>
    {/* <div className="thumbnail" style={{ backgroundImage: `url(${props.image})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%' }} > */}
    <div className="thumbnail"  >
            <div className="thumb-title">{props.title}</div>

            <div className="thumb-img" >
                <img style={{height:'175px',width:'175px', borderRadius:'50%'}} src={props.image} alt=""/>
            </div>
            <div className="maintext">{props.category}</div>
    </div>
              </Link>
  )
}
 
export default Thumbnail;