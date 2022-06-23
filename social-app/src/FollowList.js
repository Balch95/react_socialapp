import React from "react";

import './FollowList.css'

const FollowList = (props) =>{

    console.log(props.followAll)
    let liFollowList = props.followAll.map((obj)=>{
        return(
            <li key={obj.id}>
            <img src={obj.avatar_url} alt="avatar" />
            <span>{obj.username}</span>
            <button>Usuń</button>
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
