import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Singup (){

    return(
        <>
        <main>
          <h2>Singup</h2>
          <p>
            Singup Page
          </p>
        </main>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/login"> Login</Link>
        </nav>
      </>
    )
}

export default Singup;