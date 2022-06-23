import React from "react";

import './Follow.css';

const Follow = (props) =>{

    let liFollow = props.followList.map((obj)=>{
        return(
            <li key={obj.id}>    
                <img src={obj.avatar_url} alt="avatar" />
                <span className="follow-username">{obj.username}</span>
            </li>
        )
    })

    console.log(props)

    return(
        <div className="follow"> 
            <h2>Follow List:</h2>
            <ul>
               {liFollow} 
            </ul>
        </div>
    )
}

export default Follow;