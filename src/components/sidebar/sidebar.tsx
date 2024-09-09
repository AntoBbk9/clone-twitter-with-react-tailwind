import Button from "../button/button";
import BookmarksIcon from "./bookmarksIcon";
import CommunautiesIcon from "./communautiesIcon";
import GrokIcon from "./grokIcon";
import HomeIcon from "./home-icon";
import ListIcon from "./listIcon";
import MessageIcon from "./messageIcon";
import MoreIcon from "./moreIcon";
import NotificationIcon from "./notificationIcon";
import ProfilIcon from "./profilIcon";
import SearchIcon from "./searchIcon";
import SidebarItem from "./sidebarItem";
import TwitterIcon from "./twitter-icon";

function Sidebar() {
    return (
        <div className="flex flex-col justify-between gap-96">
        <div className="flex flex-col gap-6">
        <TwitterIcon />
        <SidebarItem children={<HomeIcon />} heading="Home"/>
        <SidebarItem children={<SearchIcon />} heading="Explore"/>
        <SidebarItem children={<NotificationIcon />} heading="Notifications"/>
        <SidebarItem children={<MessageIcon />} heading="Messages"/>
        <SidebarItem children={<GrokIcon />} heading="Grok"/>
        <SidebarItem children={<ListIcon />} heading="Lists"/>
        <SidebarItem children={<BookmarksIcon />} heading="Bookmarks"/>
        <SidebarItem children={<CommunautiesIcon />} heading="Communities"/>
        <SidebarItem children={<ProfilIcon />} heading="Profile"/>
        <SidebarItem children={<MoreIcon />} heading="More"/>
        <Button>Post</Button>
        </div>
           
        <div className="flex gap-6 items-center">
            <img src="/image_twitter/Profile-Photo.png" alt="photo de profil" />
                <div >
                        <div className="flex gap-3 items-center">
                            <p className="text-white">Bradley Ortiz</p>
                            <img src="/image_twitter/Vector.png" alt="" className="w-5 h-4"/>
                        </div>
                        <p className="text-gray-500">@BradleyOrtiz</p>
                </div>

                <p className="text-white">...</p>
            </div>
        </div>
    )
}

export default Sidebar;