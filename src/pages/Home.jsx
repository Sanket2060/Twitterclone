
import Tweet from '../components/Tweet';
import axios from 'axios';
import "../../src/App.css";
import { useEffect, useState } from 'react';
import UserTweet from '../components/UserTweet';
import Navbar from '../components/Navbar';
const Home = () => {
  const [users, setUser] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all/", {
      headers: {
        apikey: '6456780c7213f63d4325ec49'
      }
    });
    console.log(posts.data)
    setUser(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);
  return (
    <>
    
      <UserTweet setShouldRefresh={setShouldRefresh} />
      {users.map(({ user,content, image, _id }) => {
        return <Tweet name={user.fullname} username={'@'+user.name}  time="5hrs" tweet={content} image={image} avatar={"https://avatars.githubusercontent.com/u/"+user.githubId+"?v=4"} key={_id} />
        // return <Tweet name={data.user.fullname}  time="5hrs" tweet={data.content} image={data.image} avatar={"https://avatars.githubusercontent.com/u/"+data.user.githubId+"?v=4"} key={data.user._id} />
 
      }
      )}
    </>
  );
};

// Use the following API Key to make requests: 6456780c7213f63d4325ec49
export default Home
