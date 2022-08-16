import React from 'react'
import { Link } from 'react-router-dom';

var link = {
    color : "white",
    textDecoration : "none",
    backgroundColor : "#6C757D",
    padding : "7px",
    borderRadius : "5px",
    fontSize : "20px",
    fontStyle : "bold",
    margin : "20px"
}
function Nav() {
    return (
        <div>
            <nav style={{backgroundColor: "#24292F", padding:"30px"}}>
                <Link style={link} to='/'>Home</Link>
                <Link style={link} to='/about'>About</Link>
                <Link style={link} to='/contact'>Contact</Link>
            </nav>
        </div>
    );
}
export default Nav;