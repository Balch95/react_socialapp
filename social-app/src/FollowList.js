import axios from "axios";
import React from "react";

import './FollowList.css'

const FollowList = (props) =>{

   

    const deleteFollow = (event, id) =>{
        event.preventDefault();
        axios.post(
            "https://akademia108.pl/api/social-app/follows/disfollow",
            {
                "leader_id": id
            }
        ).then((res)=>{
            props.followAllData()
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    let liFollowList = props.followAll.map((obj)=>{
        return(
        <li key={obj.id}>
            <img src={obj.avatar_url} alt="avatar" />
            <span>{obj.username}</span>
            <button onClick={(e)=>{deleteFollow(e, obj.id)}}>Usuń</button>
        </li>
        )
    })



    return(
        <div className="follow-list">
            <h2>Lista obserwowanych:</h2>
            <ul>
                {liFollowList}
            </ul>
        </div>
    )
}

export default FollowList;
