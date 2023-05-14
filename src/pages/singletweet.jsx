import React, { useEffect, useState } from 'react'
import Tweet from '../components/Tweet';
function Singletweet() {
    const [tweet,setTweet]=useState(null);
    const fetchTweet= async () =>
    { 
        const resp=await axios.get('https://react-workshop-todo.fly.dev/posts/'+{id});
        
    }
    useEffect(()=>{
        fetchTweet();
    },[]);
  return (
    <>
    <Tweet />
    <div></div>
    </>
  )
}

export default Singletweet