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
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TweetType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
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

  const uploadImageToCloudinary = async () => {
    const file = document.querySelector<HTMLInputElement>("#fileInput")?.files?.[0];
    if (!file) return null;
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "z1fgxln5");
  
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/diieivx1l/image/upload", formData);
  
      const data = response.data;
      setUploadedImageUrl(data.secure_url);
      console.log(data);
      return data.secure_url;
    } catch (error) {
      console.error("Erreur lors de l'upload de l'image :", error);
      return null;
    }
  };

  const onSubmit = async (data: TweetType) => {
    const uploadedImage = data.image ? await uploadImageToCloudinary() : "";
  
    const newTweet = {
      id: Math.floor(Math.random() * 1000000000),
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

    const tweetForApi ={
      tweetId: Math.floor(Math.random() * 1000000000),
      content: data.content,
      createdAt: formatDate(new Date()),
      image: uploadedImage,
      likes: 0,
      retweets: 0,
      comments: 0,
      numberShare: 0,
    }
   
    if (loggedUser) {
      const updatedUser = {
        ...loggedUser,
        tweets: [tweetForApi, ...loggedUser.tweets],
      };
      setLoggedUser(updatedUser);
      console.log(updatedUser);

      try {
        await axios.post('http://localhost:3000/users', updatedUser);
      } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur :", error);
      }
    }
    
  
    try {

      setTweets([newTweet, ...tweets]);
      reset();
      setUploadedImageUrl(null);
    } catch (error) {
      console.error("Erreur lors de l'ajout du tweet :", error);
    }
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
              {...register("content", { maxLength: {
                value: 150,
                message: "Le contenu du tweet ne doit pas dépasser 150 caractères"
              },
              required: "Le contenu du tweet est obligatoire"})}
              type="text"
              placeholder="What's happening?"
              className="outline-none placeholder-graycolor2 w-full border-none bg-black text-white"
            />
          </div>
          <p className="text-red-500 text-sm p-4">{errors.content?.message}</p>

          {uploadedImageUrl && (
            <div>
              <img src={uploadedImageUrl} alt="Aperçu de l'image" className="w-40 h-40" />
            </div>
          )}

          <div className="flex gap-20 sm:justify-between border-b border-grayColor p-4">
            <div className="h-10 flex justify-center items-center">
              <div className="flex gap-5 pl-16">
                <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                  <img src="/image_twitter/imageIcon.png" alt="" />
                  <input
                    {...register("image")}
                    id="fileInput"
                    type="file"
                    className="hidden"
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
                disabled={!loggedUser}
                className={
                  !loggedUser ? "bg-blue opacity-50 cursor-not-allowed" : "bg-blue-500 cursor-pointer"
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
