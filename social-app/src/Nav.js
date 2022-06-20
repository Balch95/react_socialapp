import axios, { Axios } from "axios";
import React from "react";
import { Link } from "react-router-dom";


import './Nav.css';


const NavBar = (props) =>{


    const logout = () =>{
        axios.post(
            "https://akademia108.pl/api/social-app/user/logout",
        )
        .then((res)=>{
            localStorage.clear();
            props.setUser(null);
            window.location.reload();
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    console.log(props)

    return(
        <div className="nav-bar">
            <nav>
                <Link to="/">Home</Link>
                {!props.user&&<Link to="/login"> Login</Link>}
                {!props.user&&<Link to="/signup"> Signup</Link>}
                {props.user&&<Link to="/" onClick={logout}>Logout</Link>}
            </nav>
        </div>
    );
};

export default NavBar;