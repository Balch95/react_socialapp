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
        .then(()=>{
            let copyPosts = [...props.postList];
            let objIndex = copyPosts.findIndex((obj) => obj.id === postid);
            copyPosts[objIndex].likes.push(props.user);
            props.setPost(copyPosts);
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
        .then(()=>{
            let copyPosts = [...props.postList]
            let objIndex = copyPosts.findIndex((obj => obj.id === postid));
            copyPosts[objIndex].likes.pop(props.user)
            console.log(copyPosts)
            props.setPost(copyPosts)
        })
        .catch((err)=>{
            console.log(err)
        }) 
    }

    const delPost = (event, id) =>{
        event.preventDefault()
        axios.post(
          "https://akademia108.pl/api/social-app/post/delete",
          {
            'post_id': id
          }
        )
        .then((res)=>{
            props.postDown()
        })
        .catch((err)=>{
            console.log(err)
        })
      }



    const delPostButton = (userid, postid) =>{
        if(userid === props.user.id){
            return (
                <button onClick={(e)=>{delPost(e, postid)}}>Usuń post</button>
            );
        }
    }
    
    const setLikes = (post) => {


        if (!post.likes.filter((post) => post.id === props.user.id).length) {
          return (
            <span className="thumb-up" onClick={(e) => like(e, post.id)}>
              &#128077;
            </span>
          );
        } else {
          return (
            <span className="thumb-down" onClick={(e) => dislike(e, post.id)}>
              &#128078;
            </span>
          );
        }
      };

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
                        {delPostButton(postObj.user.id, postObj.id)}
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