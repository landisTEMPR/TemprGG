import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../imgs/wht_tempr_button.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                <img
                src={logo}
                alt="TemprGG Logo"
                className="navbar-logo-img"
                />
            </Link>  
        </div>
    </nav>
      
    </>
  )
}

export default Navbar;
