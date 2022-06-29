
import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./Login";
import './PopUpLogin.css';

const PopUpLogin = (props) =>{
    const [showPopUp, setShowPopUp] = useState(false)



  useEffect(()=>{
    const timer = setTimeout(() => setShowPopUp(true), 10000);

    return () => {
        clearTimeout(timer)
      }
  },[])

    return (
      <div>
        {showPopUp&&<div className="pop-up">   
        {props.user && (<Navigate to="/" replace={true} />)}
        <div className="pop-up-element">
            <Login setUser={props.setUser} user={props.user}/>
            <p>Jeśli nie masz konta zarejestruj się:</p>
            <Link to="/signup">Rejestracja</Link>
         </div>
        </div>}
      </div>
          
    )
}



export default PopUpLogin;