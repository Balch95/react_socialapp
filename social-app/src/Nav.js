import React from "react";
import { Link } from "react-router-dom";

import './Nav.css';


const NavBar = () =>{
    return(
        <div className="nav-bar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login"> Login</Link>
                <Link to="/signup"> Signup</Link>
            </nav>
        </div>
    );
};

export default NavBar;