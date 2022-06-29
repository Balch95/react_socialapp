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
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    console.log(props)

    return(
        <div className="nav-bar">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>{!props.user&&<Link to="/login"> Login</Link>}</li>
                    <li>{!props.user&&<Link to="/signup"> Rejestracja</Link>}</li>
                    <li>{props.user&&<Link to="/" onClick={logout}>Wyloguj</Link>}</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;