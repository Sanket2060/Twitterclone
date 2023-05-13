
import Tweet from '../components/Tweet';
import axios from 'axios';
import "../../src/App.css";
import { useEffect, useState } from 'react';
import UserTweet from '../components/UserTweet';
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
    
      <UserTweet  setShouldRefresh={setShouldRefresh} />
      {users.map(({ user, date, content, image, _id }) => {
        return <Tweet name={user.fullname}  time={date} tweet={content} image={image} avatar={"https://avatars.githubusercontent.com/u/"+user.githubId+"?v=4"} key={user.id} />
      }
      )}
    </>
  );
};

// Use the following API Key to make requests: 6456780c7213f63d4325ec49
export default Home
