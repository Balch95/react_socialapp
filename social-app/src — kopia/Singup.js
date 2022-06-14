import React, { useState } from "react";

import './Singup.css';

const Singup =()=>{

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [validError, setError] = useState();

  const setUserData = (e) =>{

      const {id , value} = e.target;
      

      if(id === "username"){
            setUsername(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "passwordConfirm"){
          setPasswordConfirm(value);
      };
  };

  const submitClick = () =>{

    let userDataObj = {};

      userDataObj={
        username: username,
        email: email,
        password: password,
      }
    
    console.log(userDataObj);
  
  };

    return(
        <div className="sing-up">
          <h2>Zarejestruj się!</h2>
          <p>{validError}</p>
          <form>
            <label htmlFor='username'>Nazwa użytkownika: </label>
            <input type="text" id="username" name="username" onChange = {(e) => setUserData(e)} required/>
            <label htmlFor="email">Adres email: </label>
            <input type="email" id="email" name="email" onChange = {(e) => setUserData(e)}  required/>
            <label htmlFor='password'>Hasło: </label>
            <input type="password" id="password" name="password" onChange = {(e) => setUserData(e)} required/>
            <label htmlFor='passwordConfirm'>Powtórz hasło: </label>
            <input type="password" id="passwordConfirm" name="passwordConfirm" onChange = {(e) => setUserData(e)} required/>
            <button onClick={()=>submitClick()}>Zarejestruj</button>
          </form>
        </div>
    )
}

export default Singup;