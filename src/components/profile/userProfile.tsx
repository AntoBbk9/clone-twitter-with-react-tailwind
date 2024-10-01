import { useState } from "react";
import { useParams } from "react-router-dom";
import Tweet from "../main/tweet";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../button/button";
import MessageIcon from "../sidebar/messageIcon";
import { User } from "./type";
import { DB } from "../../../database"

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState<User>()

  console.log(DB);
  

  const userTweets = DB.filter(tweet => tweet.username === username);
  const userInfo = userTweets.length > 0 ? userTweets[0] : null;

  if (!userInfo) {
    return <p className="text-gray-500">User not found.</p>;
  }

  return (
    <div className="w-full sm:w-[40rem] min-h-screen">
      <div className="bg-black border-b border-gray-800 px-4 py-2 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <FaArrowLeft />
          <h1 className="text-xl font-bold">{user.username}</h1>
        </div>
        <span className="text-gray-500">{userTweets.length} posts</span>
      </div>

      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={user.coverImage} 
          alt="Couverture" 
        />
        <img 
          className="absolute bottom-[-3rem] left-4 w-24 h-24 rounded-full border-3 border-black" 
          src={user.avatar} 
          alt="Avatar"
        />
      </div>
        
      <div className="flex gap-2 justify-end pt-4 pr-4">
      <div className="w-8 h-8 rounded-full flex justify-center items-center border border-gray-500">
          <MessageIcon />
        </div>
        <Button color="white" size="secondary">Follow</Button>
      </div>

      <div className="p-4 border-b border-grayColor">
        <div className=""> 
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <span className="text-sm text-graycolor2">@{user.handle}</span>
          <p className="mt-2 text-sm">{user.bio}</p>
          <p className="text-sm text-gray-400">{user.location}</p>
          <a 
            href={user.website} 
            className="text-blue-500 text-sm"
          >
            {user.website}
          </a>
          <p className="text-sm text-gray-400">Joined February 2023</p>
        </div>
      </div>

      <div>
        <h3 className="p-4 text-lg font-bold mb-4">Postes</h3>

        {userTweets.map((tweet, index) => (
          <div key={index} className="mb-4">
            <Tweet
              avatar={tweet.avatar}
              username={tweet.username}
              handle={tweet.handle}
              time={tweet.time}
              content={tweet.content}
              image={tweet.image}
              numberLike={tweet.numberLike}
              numberComment={tweet.numberCommit}
              numberRetweet={tweet.numberRetweet}
              numberDownload={tweet.numberDownload}
            />
          </div>
        ))}
        
        {userTweets.length === 0 && <p className="text-gray-500">No tweets found for {user.username}.</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
