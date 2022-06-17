import React from "react";

import './PostList.css';

function PostList (props){
  
    let liElements = props.postList.map((postObj)=>{
        return(
            <li key={postObj.id}>
                <span className="avatar">
                    <img src={postObj.user.avatar_url} alt="User avatar" />
                </span>
                <span className="user-name"> 
                        Użytkownik: {postObj.user.username}
                </span>
                <span className='post-data'>
                        Data utwożenia: {postObj.created_at}
                </span>
                <span className="content">
                        Treść: {postObj.content};
                </span>
            </li>
        );
    });
       

    return (
        <div className="post-list">
            <ul className="post-ul">
                {liElements}
            </ul>
        </div>
    );

    
};

export default PostList;