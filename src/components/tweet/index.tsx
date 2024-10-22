import { useEffect, useState } from "react";
import Button from "../button/button";
import Tweet, { TweetProps } from "./tweet";
import Icon from "../icon/icon";
import axios from "axios";
import { User } from "../profile/type";
import { useForm } from "react-hook-form";
import { TweetType } from "./type";

function Main() {

  const formatDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formatter.format(date);
  };

  const [tweets, setTweets] = useState<TweetProps[]>([]);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const { register, handleSubmit, reset } = useForm<TweetType>();
  const [tweetContent, setTweetContent] = useState("");
  const [tweetImage, setTweetImage] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tweets');
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
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTweetImage(file);
    }
  };

  const uploadImageToCloudinary = async () => {
    if (!tweetImage) return;

    const formData = new FormData();
    formData.append("file", tweetImage);
    formData.append("upload_preset", "z1fgxln5");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/diieivx1l/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    setUploadedImageUrl(data.secure_url);
    return data.secure_url;
  };

  const onSubmit = async (data: TweetType) => {
    const uploadedImage = tweetImage ? await uploadImageToCloudinary() : "";

    const newTweet = {
      avatar: loggedUser?.profilePicture,
      username: loggedUser?.username,
      name: loggedUser?.name,
      content: data.content,
      time: formatDate(new Date()),
      numberLike: 0,
      numberComment: 0,
      numberRetweet: 0,
      numberShare: 0,
      image: uploadedImage,
    };

    setTweets([newTweet, ...tweets]);
    reset();
    setTweetContent("");
    setTweetImage(null);
    setUploadedImageUrl(null);
  };

  return (
    <div className="w-full sm:w-[40rem] border-x border-grayColor">
      <div className="flex sm:justify-between sm:p-4 border-b border-grayColor">
        <p className="hidden md:block text-white">Home</p>
        <div className="flex md:hidden gap-32 items-center bg-black w-full p-4">
          <img src="/image_twitter/Profile-Photo.png" alt="photo de profil" />
          <Icon name="logo" />
        </div>
        <img className="hidden sm:block" src="/image_twitter/Vector.svg" alt="" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hidden md:block">
          <div className="flex gap-5 p-4">
            {loggedUser && (
              <img src={loggedUser.profilePicture} alt="" className="w-12 h-12 rounded-full object-cover" />
            )}
            <input
              {...register("content", { required: true })}
              type="text"
              placeholder="What's happening?"
              className="outline-none placeholder-graycolor2 w-full border-none bg-black text-white"
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
            />
          </div>

          <div className="flex gap-20 sm:justify-between border-b border-grayColor p-4">
            <div className="h-10 flex justify-center items-center">
              <div className="flex gap-5 pl-16">
                <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                  <img src="/image_twitter/imageIcon.png" alt="" />
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
                <img src="/image_twitter/Group.png" alt="" />
                <img src="/image_twitter/Group.svg" alt="" />
                <img src="/image_twitter/vectorList.svg" alt="" />
                <img src="/image_twitter/groupSec.svg" alt="" />
              </div>
            </div>
            <div>
              <Button
                color="blue"
                size="secondary"
                disabled={!tweetContent.trim()}
                className={
                  !tweetContent.trim()
                    ? "bg-blue opacity-50 cursor-not-allowed"
                    : "bg-blue-500 cursor-pointer"
                }
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </form>

      <div>
        {tweets.map((tweet, index) => (
          <Tweet
            key={index}
            avatar={tweet.avatar}
            username={tweet.username}
            name={tweet.name}
            time={tweet.time}
            content={tweet.content}
            image={tweet.image}
            numberLike={tweet.numberLike}
            numberComment={tweet.numberComment}
            numberRetweet={tweet.numberRetweet}
            numberShare={tweet.numberShare}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
