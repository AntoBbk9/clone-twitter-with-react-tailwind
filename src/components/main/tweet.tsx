interface TweetProps {
    avatar: string,
    username: string,
    handle: string,
    time: string,
    content: string,
    image?: string,
    numberLike:string,
    numberCommit:string,
    numberRetweet: string,
    numberDownload: string
}
const Tweet = ({ avatar, username, handle, time, content, image, numberLike, numberCommit, numberRetweet, numberDownload }: TweetProps) => {
  return (
    <div className="border-b border-gray-500 p-4 flex">
      <div className="mr-4">
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          className="w-12 h-12 rounded-full"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">{username}</span>
            <img src="/image_twitter/badge.png" alt="" />
            <span className="text-gray-500">@{handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{time}</span>
          </div>
        </div>

        <p className="mt-2 text-white">{content}</p>

        {image && (
          <div className="mt-2">
            <img src={image} alt="Tweet" className="rounded-3xl w-full" />
          </div>
        )}

        <div className="flex gap-24 mt-4 text-gray-500">
          <div className="flex gap-3 w-20">
            <button>
              <img src="/image_twitter/commentaire.png" alt="" />
            </button>
            <p className="text-gray-500">{numberCommit}</p>
          </div>

          <div className="flex gap-3 w-20">
            <button>
              <img src="/image_twitter/retweet.png" alt="" />
            </button>
            <p className="text-gray-500">{numberRetweet}</p>
          </div>

          <div className="flex gap-3 w-20">
            <button>
              <img src="/image_twitter/like.png" alt="" />
            </button>
            <p className="text-gray-500">{numberLike}</p>
          </div>

          <div className="flex gap-3 w-24">
            <button>
            <img src="/image_twitter/téléchargerIcon.png" alt="" />
            </button>
            <p className="text-gray-500">{numberDownload}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tweet;
