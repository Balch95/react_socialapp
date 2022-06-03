import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


function Login() {
    return (
      <>
        <main>
          <h2>Login</h2>
          <p>
            Login Page
          </p>
        </main>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/singup"> Singup</Link>
        </nav>
      </>
    );
  }
  
  export default Login;