import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Login from "./Login";
import Singup from "./Singup";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Social App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="singup" element={<Singup />}/>
      </Routes>
    </div>
  );
}



export default App;