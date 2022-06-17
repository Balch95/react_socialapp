import * as React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";

import NavBar from "./Nav";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";


function App() {

  const[user, setUser] = React.useState();

  return (
    <div className="App">
      <h1>Welcome to Social App</h1>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup user={user}/>}/>
      </Routes>
    </div>
  );
}



export default App;