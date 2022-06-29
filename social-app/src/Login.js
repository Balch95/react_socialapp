import * as React from "react";
import {useState} from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";


function Login(props) {

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState([]);
  
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
        props.setUser(res.data);
      }
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    
  }


    return (
      <div>
        {props.user && (<Navigate to="/" replace={true} />)}
          <h2>Login</h2>
          <p>{error.username} {error.password} {error.dataError}</p>
          <form onSubmit={sendLoginData}>
            <label htmlFor="username">Nazwa użytkownik: </label>
            <input type="text" id="username" name="username" onChange={(e)=>userData(e)} required/>
            <label htmlFor="password">Hasło: </label>
            <input type="password" id="password" name="password" onChange={(e)=>userData(e)} required/>
            <button>Zaloguj</button>
          </form>
      </div>
          
    )
  }
  
  export default Login;