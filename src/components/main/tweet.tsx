interface TweetProps {
    avatar: String,
    username: string,
    handle: string,
    time: string,
    content: string,
    image: string
}
const Tweet = ({ avatar, username, handle, time, content, image }: TweetProps) => {
  return (
    <div className="border-b border-gray-300 p-4 flex">
      <div className="mr-4">
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          className="w-12 h-12 rounded-full"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold">{username}</span>
            <span className="text-gray-500 ml-2">@{handle}</span>
            <span className="text-gray-500 mx-2">·</span>
            <span className="text-gray-500">{time}</span>
          </div>
        </div>

        <p className="mt-2 text-gray-900">{content}</p>

        {image && (
          <div className="mt-2">
            <img src={image} alt="Tweet" className="rounded-lg" />
          </div>
        )}

        <div className="flex justify-around mt-4 text-gray-500">
          <button className="hover:text-blue-400">
            <i className="far fa-comment"></i> Comment
          </button>
          <button className="hover:text-green-400">
            <i className="fas fa-retweet"></i> Retweet
          </button>
          <button className="hover:text-red-400">
            <i className="far fa-heart"></i> Like
          </button>
          <button className="hover:text-blue-400">
            <i className="far fa-share-square"></i> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
