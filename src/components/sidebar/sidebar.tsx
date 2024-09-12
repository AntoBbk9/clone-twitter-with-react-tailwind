import Button from "../button/button";
import ButtonMobile from "../button/buttonMobile";
import BookmarksIcon from "./bookmarksIcon";
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

    <>
    <div></div>
        
            <div className="flex flex-col-reverse sm:hidden fixed bottom-0 w-full gap-4 items-end">
                <div className="flex justify-between bg-black w-full py-6">
                    <SidebarItem href="/home" children={<HomeIcon />} />
                    <SidebarItem href="/search" children={<SearchIcon />} />
                    <SidebarItem href="/notification" children={<NotificationIcon />} />
                    <SidebarItem href="/message" children={<MessageIcon />} />
                </div>
                <div>
                    <ButtonMobile size="primary">
                        <svg className="py-3 px-3" fill="white">
                        <g>
                            <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                        </g>
                        </svg>
                    </ButtonMobile>
                </div>
            </div>    
        
        <div className="hidden md:flex flex-col justify-between border-r border-grayColor p-4 h-screen sticky top-0">
        <div className="flex flex-col gap-3 md:gap-3 xl:gap-5 md:items-center lg:items-start">
          <TwitterIcon />
          <SidebarItem href="/home" children={<HomeIcon />} heading="Home" />
          <SidebarItem href="/search" children={<SearchIcon />} heading="Explore" />
          <SidebarItem href="/notification" children={<NotificationIcon />} heading="Notifications" />
          <SidebarItem href="/message" children={<MessageIcon />} heading="Messages" />
          <SidebarItem href="/list" children={<ListIcon />} heading="Lists" />
          <SidebarItem href="/bookmarks" children={<BookmarksIcon />} heading="Bookmarks" />
          <SidebarItem href="/profil" children={<ProfilIcon />} heading="Profile" />
          <SidebarItem href="/more" children={<MoreIcon />} heading="More" />
          <Button color="blue" size="primary">Post</Button>
          <ButtonMobile size="primary">
            <svg className="py-3 px-3" fill="white">
              <g>
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </g>
            </svg>
          </ButtonMobile>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/image_twitter/Profile-Photo.png" alt="photo de profil" />
          <div>
            <div className="flex gap-3 items-center">
              <p className="hidden lg:block text-white">Bradley Ortiz</p> 
              <img src="/image_twitter/Vector.png" alt="" className="hidden lg:block w-5 h-4" />
            </div>
            <p className="hidden lg:block text-graycolor2">@Bradleyortiz</p> 
          </div>
          <p className="hidden lg:block text-white">...</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;