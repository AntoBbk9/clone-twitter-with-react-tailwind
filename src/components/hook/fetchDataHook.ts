import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../profile/type";
import { TweetProps } from "../tweet/tweet";

const useTweets = (apiUrl: string) => {
  const [tweets, setTweets] = useState<TweetProps[]>([]);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const users = response.data;

        const tweetsData = users.flatMap((user: User) =>
          user.tweets.map(tweet => ({
            avatar: user.profilePicture,
            username: user.username,
            name: user.name,
            content: tweet.content,
            time: tweet.createdAt,
            numberLike: tweet.likes,
            numberComment: tweet.comments,
            numberRetweet: tweet.retweets,
            numberShare: tweet.numberShare,
            image: tweet.image,
          }))
        );

        setTweets(tweetsData);
        setLoggedUser(users[0]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, [apiUrl]);

  return { tweets, loggedUser };
};

export default useTweets;
