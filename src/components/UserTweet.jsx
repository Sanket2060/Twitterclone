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
                avatar: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F3%2F3b%2FSpongeBob_SquarePants_character.svg%2F1200px-SpongeBob_SquarePants_character.svg.png&tbnid=_J43LrmSL0ZcZM&vet=12ahUKEwjqtOXbyeL-AhWByaACHYH_ABMQMygAegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpongeBob_SquarePants_(character)&docid=QJghRjEztyfmyM&w=1200&h=1200&q=SpongeBob%20SquarePants%20(character)&ved=2ahUKEwjqtOXbyeL-AhWByaACHYH_ABMQMygAegUIARDhAQ",
                date: '2023',
                image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F3%2F3b%2FSpongeBob_SquarePants_character.svg%2F1200px-SpongeBob_SquarePants_character.svg.png&tbnid=_J43LrmSL0ZcZM&vet=12ahUKEwjqtOXbyeL-AhWByaACHYH_ABMQMygAegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpongeBob_SquarePants_(character)&docid=QJghRjEztyfmyM&w=1200&h=1200&q=SpongeBob%20SquarePants%20(character)&ved=2ahUKEwjqtOXbyeL-AhWByaACHYH_ABMQMygAegUIARDhAQ',
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