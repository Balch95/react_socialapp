import * as React from "react";
import axios from 'axios';
import {useState, useEffect} from "react";

import './Home.css';

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
            const post = res.data;
            

            let postObjAr = [];

            for (const element of post) {
              let postObj ={
                id: element.id,
                data: element.created_at,
                content: element.content,
                update: element.updated_at,
                user: element.user.username,
                avatar: element.user.avatar_url,
              }
              postObjAr.push(postObj);
            }
            setPost(postObjAr); 
          })
        .catch((err)=>{
            console.log('Axios error', err);
          })
      };
     
    const nextPost = () =>{
      let lastPostDate = postList[postList.length - 1].data;
      let sendData = {
        "date": lastPostDate
      }
      console.log(sendData)
      axios.post(
        'https://akademia108.pl/api/social-app/post/older-then',
        sendData,
        axiosConfing)
        .then((res)=>{
          const post = res.data;
            

            let postObjAr = postList;

           
      console.log(postList)

            for (const element of post) {
              let postObj ={
                id: element.id,
                data: element.created_at,
                content: element.content,
                update: element.updated_at,
                user: element.user.username,
                avatar: element.user.avatar_url,
              }
              postObjAr.push(postObj);
            }

            setPost(postObjAr); 
        })

        .catch((err)=>{
          console.log(err);
        })

        
    }  


    useEffect(()=>{

      postDown()
      

      }, []);

      console.log(postList)
    return (
         <div className="main-home">
            <h2>Post List: </h2>
            <PostList postList={postList}/>
            <button onClick={nextPost}>Pobierz</button>
        </div>
    );
  }

export default Home;