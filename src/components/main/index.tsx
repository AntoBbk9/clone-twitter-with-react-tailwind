import Button from "../button/button"
import Tweet from "./tweet"

function Main() {
  return (
    <div className="w-96">
        <div className="flex  justify-between  border-b border-gray-500">
            <p className="text-white">Home</p>
            <img className="hidden sm:block" src="/image_twitter/Vector.svg" alt="" />
        </div>
        <div>
          <div className="flex gap-5">
            <img src="/image_twitter/Profile-Photo.png" alt="" />
            <input type="text" placeholder="What's happening?" className=" placeholder-gray-500 w-full border-none bg-black text-white" />
          </div>

          <div className="flex justify-between border-b border-gray-500">
            <div className="h-10 flex justify-center items-center">
              <div className="flex gap-5">
                <img src="/image_twitter/imageIcon.png" alt="" />
                <img src="/image_twitter/Group.png" alt="" />
                <img src="/image_twitter/Group.svg" alt="" />
                <img src="/image_twitter/vectorList.svg" alt="" />
                <img src="/image_twitter/groupSec.svg" alt="" />
              </div>
            </div>
            <div>
              <Button>Tweet</Button>
            </div>
          </div> 
        </div>
        <div>
        <Tweet />
        </div>
    </div>
  )
}

export default Main