import UserProfile from "../components/profile/userProfile"
import RigthBar from "../components/rigthBar/rigthBar"
import Sidebar from "../components/sidebar/sidebar"

function Profile() {
  return (
    <div className='flex sm:justify-center'>
    <Sidebar />
    <UserProfile />
    <RigthBar />
  </div>
  )
}

export default Profile