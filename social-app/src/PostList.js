import axios from "axios";
import React from "react";


import './PostList.css';

function PostList (props){
  
    const like = (event, postid) =>{
        event.preventDefault();
        axios.post(
            "https://akademia108.pl/api/social-app/post/like",
            {
                "post_id": postid,
            }
        )
        .then((res)=>{
            console.log('I like it!');
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const dislike = (event, postid) =>{
        event.preventDefault();
        axios.post(
            "https://akademia108.pl/api/social-app/post/dislike",
            {
                "post_id": postid,
            }
        )
        .then((res)=>{
            console.log('I dislike it!');
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const setLikes = (post) =>{
        let statusLike = false;
        if(post.likes.length === 0){
            statusLike = false;
        }else{
            if(post.likes.map(id=>id.id) === props.user.id){
                statusLike = true;
            }else{
                statusLike = false;
            }
        }

        if(!statusLike){
            return(
                <span className="thumb-up" onClick={(e)=>like(e, post.id)}>&#128077;</span>
            )
        }else{
            return(
                <span className="thumb-down" onClick={(e)=>dislike(e, post.id)}>&#128078;</span>
            )
        }
        
    }

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
                {props.user&&<div className="like">
                        {setLikes(postObj)}
                    <p className="like-value">Liczba polubień: {postObj.likes.length}</p>
                </div>}
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