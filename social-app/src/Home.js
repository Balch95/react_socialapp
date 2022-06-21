import * as React from "react";
import axios from 'axios';
import {useState, useEffect} from "react";

import './Home.css';

import PostList from "./PostList";


const Home = (props)=>{

   const [postList, setPost] = useState([])
   const [lastPostDate, setLastPostDate] = useState();

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
            setPost(res.data)   
            setLastPostDate(res.data[res.data.length - 1].created_at)   
            
          })
        .catch((err)=>{
            console.log('Axios error', err);
          });
      };
     
    const nextPost = () =>{
      axios.post(
        'https://akademia108.pl/api/social-app/post/older-then',
        {
          "date": lastPostDate
        },
        axiosConfing)
        .then((res)=>{
          postList.push(...res.data)  
          setLastPostDate(res.data[res.data.length - 1].created_at)   
        })
        .catch((err)=>{
          console.log(err);
        })

        
    }  

  

    useEffect(()=>{
      postDown();
      }, []);
   


    return (
         <div className="main-home">
            <h2>Post List: </h2>
            <PostList postList={postList} user={props.user}/>
            <button onClick={nextPost}>Pobierz</button>
        </div>
    );
  }

export default Home;