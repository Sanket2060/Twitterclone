import React, { useEffect, useState } from 'react'

function Singletweet() {
    const [tweet,setTweet]=useState(null);
    const fetchTweet= async () =>
    { 
        const resp=await axios.get('');
        
    }
    useEffect(()=>{
        fetchTweet();
    },[]);
  return (
    <div>Singletweet</div>
  )
}

export default Singletweet