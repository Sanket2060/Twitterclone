import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Tweet from '../components/Tweet';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import Back from '../components/Back';
function Singletweet() {
    const {_id}=useParams();
    console.log(_id);
    const [postdata,SetPostData]=useState({});
    const fetchTweet= async () =>
    { 
      // console.log(_id);
        const resp=await axios.get('https://react-workshop-todo.fly.dev/posts/'+_id,{
          headers: { 
            apikey : '6456780c7213f63d4325ec49',
          }
        })
        // console.log(resp.data.post);
        SetPostData(resp.data.post);
        console.log("data="+postdata);      
      }
      useEffect(()=>{
        fetchTweet();
      },[]);
      const {
        content,
        image,
        user: {name,fullname,githubId}={}}=
        postdata;
    


  return (
    <>
    <Back />
    <Tweet name={fullname} username={name}  time="5hrs" tweet={content} image={image}  _id={_id} avatar={"https://avatars.githubusercontent.com/u/"+githubId+"?v=4"}/>
    {/* {
    postdata?
      postdata.map(({ user,content, image, _id }) => {
        return <Tweet name={user.fullname} username={user.name}  time="5hrs" tweet={content} image={image} avatar={"https://avatars.githubusercontent.com/u/"+user.githubId+"?v=4"} _id={_id} />
        
      }):null
    }
      <Tweet /> */}
    <Comment />
  
    </>
  )
}

export default Singletweet