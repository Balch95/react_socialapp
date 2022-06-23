import React from "react";
import axios from "axios";
import { useState } from "react";

const AddPost = (props) =>{


    const [postValue, setPostVale] = useState()

    

    const sendPost = () =>{
        axios.post(
            "https://akademia108.pl/api/social-app/post/add",
            {"content": postValue}
        ).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }





    return(
        <div className="add-post">   
            <form onSubmit={(e)=>sendPost(e)}>
                <textarea cols="30" rows="10" onChange = {(e) => setPostVale(e.target.value)} required></textarea>
                <button>Dodaj post</button>
            </form>
        </div>
    )
}

export default AddPost;