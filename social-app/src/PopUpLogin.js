import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


import './PopUpLogin.css';

const PopUpLogin = (props) =>{
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false)


    const userData = (e) => {

    const {id , value} = e.target;

        if(id === "username"){
        setLogin(value)
        }
        if(id === "password"){
        setPassword(value)
        }
    };

  const sendLoginData = (event) =>{
    event.preventDefault();
    let loginParamets={
      "username": login,
      "password": password,
      "ttl": 3600
    }
    
    axios.post(
      'https://akademia108.pl/api/social-app/user/login',
      loginParamets,
    )
    .then((res)=>{
      
      if(res.status === 201){
        setError(res.data)
        if(res.data.error === true){
          setError({
            "dataError":"Złe hasło lub login!"}
            );
        }
      }
      if(res.status ===200){
        localStorage.setItem("user", JSON.stringify(res.data));
        setShowPopUp(false)
        props.setUser(res.data);
      }
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    
  }

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
            <h2>Login</h2>
            <p>{error.username} {error.password} {error.dataError}</p>
            <form onSubmit={sendLoginData}>
                <label htmlFor="username">Nazwa użytkownik: </label>
                <input type="text" id="username" name="username" onChange={(e)=>userData(e)} required/>
                <label htmlFor="password">Hasło: </label>
                <input type="password" id="password" name="password" onChange={(e)=>userData(e)} required/>
                <button>Zaloguj</button>
                <p>Jeśli nie masz konta zarejestruj się:</p>
            <Link to="/signup"> Rejestracja</Link>
            </form>    
         </div>
        </div>}
      </div>
          
    )
}



export default PopUpLogin;