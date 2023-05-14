import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Tweet = ({ name, username, time, tweet, image, avatar ,key}) => {
    useEffect(()=>{
        console.log(key);
    })
    const navigate=useNavigate();
    const opensingletweet=()=>{
          navigate("/tweet/:id")

    }
    return (<div className="tweet" onClick={opensingletweet}>
        <img
            className="profile-pic"
            src={avatar}
            alt="Profile Picture"
            height={100}
        />
        <div className="tweet-content">
            <Header name={name} username={username} time={time} />
            <TweetBody tweet={tweet} image={image} />
            <Footer />
        </div>
    </div >);
};
export default Tweet;