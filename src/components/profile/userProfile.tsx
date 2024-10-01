import { useParams } from "react-router-dom";
import tweetsData from "../main/tweets";
import Tweet from "../main/tweet";

interface User {
  username: string;
  handle: string;
  avatar: string;
  bio: string;
  location: string;
  website: string;
  coverImage: string;
}

const ProfilePage = () => {
  const { username } = useParams();

  const userTweets = tweetsData.filter(tweet => tweet.username === username);
  const userInfo = userTweets.length > 0 ? userTweets[0] : null;

  if (!userInfo) {
    return <p className="text-gray-500">User not found.</p>;
  }

  const user: User = {
    username: userInfo.username,
    handle: userInfo.handle,
    avatar: userInfo.avatar || "https://example.com/avatar.png",
    bio: "Passionnée par le Développement Web",
    location: "Kinshasa, DRC",
    website: "https://example.com",
    coverImage: "/image_twitter/backgroundImg.png"
  };

  return (
    <div className="w-full sm:w-[40rem] min-h-screen">
      <div className="bg-black border-b border-gray-800 px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">{user.username}</h1>
        <span className="text-gray-500">{userTweets.length} posts</span>
      </div>

      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={user.coverImage} 
          alt="Couverture" 
        />
        <img 
          className="absolute bottom-[-30px] left-4 w-24 h-24 rounded-full border-4 border-black" 
          src={user.avatar} 
          alt="Avatar"
        />
      </div>

      <div className="p-4 pt-8 border-b border-gray-800">
        <div className="ml-32"> 
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <span className="text-sm text-blue-500">@{user.handle}</span>
          <p className="mt-2 text-sm">{user.bio}</p>
          <p className="text-sm text-gray-400">{user.location}</p>
          <a 
            href={user.website} 
            className="text-blue-500 text-sm" 
            target="_blank" 
            rel="noopener noreferrer">
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
              numberCommit={tweet.numberCommit}
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
