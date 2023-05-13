import { useState } from "react";
import axios from "axios";
const UserTweet = ({ setShouldRefresh }) => {
    let [tweetContent, setTweetContent] = useState("");
    console.log(tweetContent);
    const upload = async () => {
        try {
            await axios.post("https://react-workshop-todo.fly.dev/posts", {
                authorname: 'Sanket Karki',
                content: tweetContent,
                avatar: "",
                date: '2023',
                image: 'https://static.wikia.nocookie.net/cartoons/images/e/ed/Profile_-_SpongeBob_SquarePants.png/revision/latest?cb=20230305115632',
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