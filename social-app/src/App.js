import * as React from "react";
import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import NavBar from "./Nav";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

import "./App.css";

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  axios.defaults.headers.common['Authorization'] = "Bearer " + (user ? user.jwt_token : "");


  return (
    <div className="App">
      <h1>Welcome to Social App</h1>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} user={user}/>} />
        <Route path="login" element={<Login setUser={setUser} user={user}/>} />
        <Route path="signup" element={<Signup user={user} setUser={setUser}/>}/>
      </Routes>
    </div>
  );
}



export default App;