interface TweetProps {
  avatar: string,
  username: string,
  handle: string,
  time: string,
  content: string,
  image?: string,
  numberLike: string,
  numberCommit: string,
  numberRetweet: string,
  numberDownload: string
}

const Tweet = ({ avatar, username, handle, time, content, image, numberLike, numberCommit, numberRetweet, numberDownload }: TweetProps) => {
  return (
    <div className="sm:w-full border-b border-grayColor p-4 flex">
      <div className="mr-4">
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col w-5/6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-[15px]">{username}</span>
            <img src="/image_twitter/badge.png" alt="" />
            <span className="text-graycolor2 text-[15px]">@{handle}</span>
            <span className="text-graycolor2 text-[15px]">·</span>
            <span className="text-graycolor2 text-[15px]">{time}</span>
          </div>
        </div>

        <p className="mt-2 text-white font-light text-[15px]">{content}</p>

        {image && (
          <div className="mt-2">
            <img src={image} alt="Tweet" className="rounded-3xl w-full object-cover" />
          </div>
        )}

        <div className="flex gap-10 md:gap-12 mt-4 text-graycolor2">
          <div className="flex gap-1 md:gap-3 w-28">
            <button>
              <img src="/image_twitter/commentaire.png" alt="" className="object-cover w-4" />
            </button>
            <p className="text-graycolor2 text-[12px] md:text-[15px]">{numberCommit}</p>
          </div>

          <div className="flex gap-1 md:gap-3 w-28">
            <button>
              <img src="/image_twitter/retweet.png" alt="" className="object-cover w-4" />
            </button>
            <p className="text-graycolor2 text-[12px] md:text-[15px]">{numberRetweet}</p>
          </div>

          <div className="flex gap-1 md:gap-3 w-28">
            <button>
              <img src="/image_twitter/like.png" alt="" className="object-cover w-4" />
            </button>
            <p className="text-graycolor2 text-[10px] md:text-[15px]">{numberLike}</p>
          </div>

          <div className="flex gap-3 md:gap-3 w-24">
            <button>
              <img src="/image_twitter/téléchargerIcon.png" alt="" className="object-cover w-4" />
            </button>
            <p className="text-graycolor2 text-[12px] md:text-[15px]">{numberDownload}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
