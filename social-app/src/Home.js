import * as React from "react";
import axios from 'axios';
import {useState, useEffect} from "react";

import './Home.css';

import PostList from "./PostList";
import AddPost from "./AddPost";
import Follow from "./Follow";
import FollowList from "./FollowList";

const Home = (props)=>{

   const [postList, setPost] = useState([])
   const [lastPostDate, setLastPostDate] = useState();
   const [followList, setFollowList] = useState();
   const [followAll, setFollowAll] = useState()


   

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
  

  const followAllData = () =>{
    axios.post(
      "https://akademia108.pl/api/social-app/follows/allfollows"
    )
    .then((res)=>{
      setFollowAll(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }


    useEffect(()=>{
      postDown();
      followRecommendations();
      followAllData();
    }, [props.user]);
   


    return (
         <div className="main-home">
            {props.user&&<AddPost user={props.user}/>}
            {props.user&&followList&&<Follow followList={followList} setFollowList={setFollowList} followRecommendations={followRecommendations}
            followAllData={followAllData} postDown={postDown}/>}
            {props.user&&followAll&&<FollowList followAll={followAll} followAllData={followAllData}/>}
            <PostList postList={postList} user={props.user} setPost={setPost} postDown={postDown}/>
            <button onClick={nextPost}>Pobierz</button>
        </div>
    );
  }

export default Home;