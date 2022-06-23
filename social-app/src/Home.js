import * as React from "react";
import axios from 'axios';
import {useState, useEffect} from "react";

import './Home.css';

import PostList from "./PostList";
import AddPost from "./AddPost";
import Follow from "./Follow";


const Home = (props)=>{

   const [postList, setPost] = useState([])
   const [lastPostDate, setLastPostDate] = useState();
   const [followList, setFollowList] = useState();

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

    const followRecommendations = () =>{
      axios.post(
          "https://akademia108.pl/api/social-app/follows/recommendations",
      )
      .then((res)=>{
          setFollowList(res.data)
      })
      .catch((err)=>{
          console.log(err);
      })

  }
  

    useEffect(()=>{
      postDown();
      followRecommendations();
    }, [props.user]);
   


    return (
         <div className="main-home">
            {props.user&&<AddPost user={props.user}/>}
            {props.user&&followList&&<Follow followList={followList}/>}
            <PostList postList={postList} user={props.user}/>
            <button onClick={nextPost}>Pobierz</button>
        </div>
    );
  }

export default Home;