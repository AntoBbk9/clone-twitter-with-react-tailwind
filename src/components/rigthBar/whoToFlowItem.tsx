import Button from "../button/button"

interface WhoToFlowItem{
    image:string,
    username:string,
    handle:string,
}
function WhoToFlowItem({ image, username, handle }: WhoToFlowItem) {
  return (
    <div className="flex justify-between pt-8">
        <div className="flex gap-1">
            <img src={image} alt={`${username}'s image`} />
            <div>
                <div className="flex gap-2 items-center">
                    <span className="text-white text-[15px]">{username}</span>
                    <img src="/image_twitter/badge.png" alt="" />
                </div>
                <span className="text-graycolor2 text-[15px]">@{handle}</span>
            </div>
        </div>
        <Button size="secondary" color="white" className="text-[15px]">Follow</Button>
    </div>
  )
}

export default WhoToFlowItem