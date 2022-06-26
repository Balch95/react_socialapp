import axios from "axios";
import React from "react";


import './Follow.css';

const Follow = (props) =>{

    const addToFollow = (event, id) =>{
        event.preventDefault();
        axios.post(
            "https://akademia108.pl/api/social-app/follows/follow",
            {
                "leader_id": id
            }
        )
        .then(()=>{
            props.postDown()
            props.followRecommendations()
            props.followAllData()
        })
        .catch((err)=>{
            console.log(err)
        })
    }






    let liFollow = props.followList.map((obj)=>{
        return(
            <li key={obj.id}>    
                <img src={obj.avatar_url} alt="avatar" />
                <span className="follow-username">{obj.username}</span>
                <button onClick={(e)=>addToFollow(e, obj.id)}>Dodaj</button>
            </li>
        )
    })

    console.log(props)

    return(
        <div className="follow"> 
            <h2>Obserwuj:</h2>
            <ul>
               {liFollow} 
            </ul>
        </div>
    )
}

export default Follow;