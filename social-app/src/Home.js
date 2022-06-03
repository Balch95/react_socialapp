import * as React from "react";
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from "react";

import PostList from "./PostList";


const Home = (props)=>{

   const [postList, setPost] = useState([])

    let postData ={
      username: "Jan",
      password: "password"
    }

    let axiosConfing={
      headers:{
        'Content-Type' :'application/json',
        'Accept' : 'application/json' 
      }
    };

    const postDown = () =>{
      axios.post(
          'https://akademia108.pl/api/social-app/post/latest',
          postData,
          axiosConfing)
        .then((res)=>{
            setPost(()=>{
              let newPostObj = {
                id: res.data.id,
                data: res.data.crated_at,
                content: res.data.content,
                user: res.data.user,
              };
            }); 
          })
        .catch((err)=>{
            console.log('Axios error', err);
          })
      };
   

    useEffect(()=>{

      let timer = setInterval(()=>{postDown()}, 5000);

      return(()=>{
          clearInterval(timer);
      });
      });

    

    return (
        <div className="main-home">
            <PostList postList={postList}/>
        </div>
    );
  }

export default Home;