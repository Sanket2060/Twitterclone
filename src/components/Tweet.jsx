import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";
const Tweet = ({ name, username, time, tweet, image, avatar }) => {
    return (<div className="tweet">
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