import { useState } from "react";
import axios from "axios";
const UserTweet = ({ setShouldRefresh }) => {
    let [tweetContent, setTweetContent] = useState("");
    console.log(tweetContent);
    const upload = async () => {
        try {
            await axios.post("https://react-workshop-todo.fly.dev/posts", {
                content: tweetContent,
                image: 'https://deadline.com/wp-content/uploads/2023/02/nickelodeon.jpg?w=681&h=383&crop=1',
                username: 'Sanket Karki',
                fullname:'Sanket Karki'
                
            }, {
                headers: {
                    apikey: '6456780c7213f63d4325ec49'
                }
            });
            setTweetContent("");
            setShouldRefresh((v) => !v);
        }
        catch (e) {
            console.log(e);
        }
    };
    const handleSubmit = () => {
        upload();
    }


    return (

        <>
            <div className="tweet-box">
                <textarea placeholder="What's on your mind?" required value={tweetContent} onChange={(e) => setTweetContent(e.target.value)}></textarea>
                <button onClick={handleSubmit}>Tweet</button>
            </div>
        </>
    );
};

export default UserTweet;