import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Tweet from '../components/Tweet';
import Comment from './Comment';
function Singletweet() {
    var _id;
    const [tweet,setTweet]=useState(null);
    const fetchTweet= async () =>
    { 
      // console.log(_id);
        const resp=await axios.get('https://react-workshop-todo.fly.dev/posts/'+{_id});
        
    }
    useEffect(()=>{
        fetchTweet();
    },[]);
  return (
    <>
    <Tweet />
    <Comment />
    <div></div>
    </>
  )
}

export default Singletweet