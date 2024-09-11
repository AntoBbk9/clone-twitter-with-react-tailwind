import Button from "../button/button"
import ButtonMobile from "../button/buttonMobile"
import Tweet from "./tweet"

function Main() {
  return (
    <div className="w-[40rem] border-r border-grayColor sm:border-none">
        <div className="flex sm:justify-between p-4 border-b border-grayColor">
            <p className="text-white">Home</p>
            <img className="hidden sm:block" src="/image_twitter/Vector.svg" alt="" />
        </div>
        <div>
          <div className="flex gap-5 p-4 ">
            <img src="/image_twitter/Profile-Photo.png" alt="" />
            <input type="text" placeholder="What's happening?" className="outline-none placeholder-graycolor2 w-full border-none bg-black text-white" />
          </div>

          <div className="flex gap-20 sm:justify-between border-b border-grayColor p-4">
            <div className="h-10 flex justify-center items-center">
              <div className="flex gap-5 pl-16">
                <img src="/image_twitter/imageIcon.png" alt="" />
                <img src="/image_twitter/Group.png" alt="" />
                <img src="/image_twitter/Group.svg" alt="" />
                <img src="/image_twitter/vectorList.svg" alt="" />
                <img src="/image_twitter/groupSec.svg" alt="" />
              </div>
            </div>
            <div>
              <Button color="blue" size="secondary" className="hidden sm:block">Post</Button>
              <ButtonMobile className="block sm:hidden">Post</ButtonMobile>
            </div>
          </div> 
        </div>
        <div>

        <Tweet
          avatar="/image_twitter/image.png"
          username="CNN"
          handle="cnn"
          time="7m"
          content="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis."
          numberLike="57"
          numberCommit="144"
          numberRetweet="184"
          numberDownload=""
          />

        <Tweet
          avatar="/image_twitter/image-1.png"
          username="The New York Times"
          handle="nytimes"
          time="2h"
          content="Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land."
          image="/image_twitter/image-3.png"
          numberLike="19"
          numberCommit="48"
          numberRetweet="482"
          numberDownload=""
          />

        <Tweet
          avatar="/image_twitter/image-logo.png"
          username="Twitter"
          handle="Twitter"
          time="Oct 29"
          content="BIG NEWS lol jk still Twitter."
          numberLike="6.8K"
          numberCommit="36.6K"
          numberRetweet="267.1K"
          numberDownload=""
          />

        <Tweet
          avatar="/image_twitter/image-logo.png"
          username="Twitter"
          handle="Twitter"
          time="Oct 29"
          content="Hello literally everyone."
          numberLike="118.7K"
          numberCommit="785.4K"
          numberRetweet="3.3M"
          numberDownload=""
          />
        
        <Tweet
          avatar="/image_twitter/image-logo.png"
          username="Twitter"
          handle="Twitter"
          time="Oct 4"
          content="Hello literally everyone."
          image="/image_twitter/image-3.png"
          numberLike="118.7K"
          numberCommit="785.4K"
          numberRetweet="3.3M"
          numberDownload=""
          />

        <Tweet
          avatar="/image_twitter/image-logo.png"
          username="Twitter"
          handle="Twitter"
          time="Oct 4"
          content="Hello literally everyone."
          numberLike="118.7K"
          numberCommit="785.4K"
          numberRetweet="3.3M"
          numberDownload=""
          />
        </div>
    </div>
  )
}

export default Main