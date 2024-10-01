import { Link } from "react-router-dom";
import Button from "../button/button";
import SidebarItem from "./sidebarItem";
import Icon from "../icon/icon";

function Sidebar() {
    return (

    <>
      <div className="flex flex-col-reverse sm:hidden fixed bottom-0 w-full gap-4 items-end">
        <div className="flex justify-between bg-black w-full py-6">
          <SidebarItem href="/home" children={<Icon name='home'/>} />
          <SidebarItem href="/search" children={<Icon name='search'  />} />
          <SidebarItem href="/notification" children={<Icon name='notification' />} />
          <SidebarItem href="/message" children={<Icon name='message' />} />
          <SidebarItem href="/list" children={<Icon name='profil' />} heading="Lists" />
          <SidebarItem href="/bookmarks" children={<Icon name='bookmarks'/>} heading="Bookmarks" />
        </div>

        <div>
          <Button size="primary" color="blue">
          <Button size="primary" color="blue">
              <Icon name='iconButtonMobile' />
            </Button>
          </Button>
      </div>
    </div>    
        
        <div className="hidden md:flex flex-col justify-between border-r border-grayColor p-4 h-screen sticky top-0">
        <div className="flex flex-col gap-3 md:gap-3 xl:gap-5 md:items-center lg:items-start">
          <Link to="/">
            <Icon name='logo' />
          </Link>
          <Link to="/">
            <SidebarItem href="/home" children={<Icon name='home'/>} heading="Home" />
          </Link>
          <SidebarItem href="/search" children={<Icon name='search' />} heading="Explore" />
          <SidebarItem href="/notification" children={<Icon name='notification' />} heading="Notifications" />
          <SidebarItem href="/message" children={<Icon name='message' />} heading="Messages" />
          <SidebarItem href="/list" children={<Icon name='lists' />} heading="Lists" />
          <SidebarItem href="/bookmarks" children={<Icon name='bookmarks' />} heading="Bookmarks" />
          <SidebarItem href="/profil" children={<Icon name='profil' />} heading="Profile" />
          <SidebarItem href="/more" children={<Icon name='more' />} heading="More" />
          <div className="hidden lg:block">
            <Button color="blue" size="primary">Post</Button>
          </div>
          <div className="block lg:hidden">
            <Button size="primary" color="blue">
              <Icon name='iconButtonMobile' />
            </Button>
          </div>
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