import React from "react";
import {useState, useEffect} from "react";

import './PostList.css';

function PostList (props){

    let post = props.postList;

    let liElements = post.map((postObj)=>{
        return(
            <li key={postObj.id}>
                <span className="avatar">
                    <img src={postObj.avatar} alt="User avatar" />
                </span>
                <span className="user-name"> 
                        Użytkownik: {postObj.user}
                </span>
                <span className='post-data'>
                        Data utwożenia: {postObj.data}
                </span>
                <span className="content">
                        Treść: {postObj.content};
                </span>
                <span className="update">
                        Data ostatniej edycji: {postObj.update}
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