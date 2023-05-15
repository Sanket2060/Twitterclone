import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Tweet from '../components/Tweet';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import Back from '../components/Back';
function Singletweet() {
    const {_id}=useParams();
    console.log(_id);
    const [tweet,setTweet]=useState(null);
    const fetchTweet= async () =>
    { 
      // console.log(_id);
        const resp=await axios.get('https://react-workshop-todo.fly.dev/posts/'+_id,{
          headers: { 
            apikey : '6456780c7213f63d4325ec49',
          }
        })
        
    }
    useEffect(()=>{
        fetchTweet();
    },[]);
  return (
    <>
    <Back />
    {/* {users.map(({ user,content, image, _id }) => {
        return <Tweet name={user.fullname} username={'@'+user.name}  time="5hrs" tweet={content} image={image} avatar={"https://avatars.githubusercontent.com/u/"+user.githubId+"?v=4"} _id={_id} />
        // return <Tweet name={data.user.fullname}  time="5hrs" tweet={data.content} image={data.image} avatar={"https://avatars.githubusercontent.com/u/"+data.user.githubId+"?v=4"} key={data.user._id} />
 
      }
      )} */}
    <Tweet />
    <Comment />
  
    </>
  )
}

export default Singletweet