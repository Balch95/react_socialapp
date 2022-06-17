import React, { useState } from "react";

import './Singup.css';

const Singup =()=>{

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [validError, setError] = useState(null);


  const setUserData = (e) =>{

      const {id , value} = e.target;
      

      if(id === "username"){
            if(value.length <= 4){
              setError("Za krótki nick! Minimalna długość 4 znaki!");
            }else{
              if(/^[^\s]*$/.test(value)){
                setUsername(value);
                setError()
              }else{
                setError("Niedozwolona nazwa użytkownik! Zawiera puste znaki!");
              }
            }
      }
      if(id === "email"){
        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)){
          setEmail(value);
          setError()
        }else{
          setError("Niepoprawny format adresu e-mail!");
        }
      }
      if(id === "password"){
        if(value.length <= 6){
          setError("Hasło musi zawierać minimum 6 znaków!")
        }else{
            if(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value) && /\d/.test(value)){
              setPasswordConfirm(value);
              setError()
        }else{
          setError("Hsło musi zawierać znak specjalny oraz cyfrę!")
        } 
        }
      }
      if(id === "passwordConfirm"){
        if(passwordConfirm === value){
           setPassword(value);
           setError()
        }else{
          setError("Hasła nie są takie same!")
        }
      };

     
  };

  const submitClick = () =>{

    let userDataObj = {};

      userDataObj={
        username: username,
        email: email,
        password: password,
      }

    setUsername(null);
    setEmail(null);
    setPassword(null)
    setPasswordConfirm(null)  

    console.log(userDataObj);
  
  };

  console.log(validError)
    return(
        <div className="sing-up">
          <h2>Zarejestruj się!</h2>
          <p className="error">{validError}</p>
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