import Main from "../components/tweet"
import RigthBar from "../components/rigthBar/rigthBar"
import Sidebar from "../components/sidebar/sidebar"

function Home() {
  return (
        <div className='flex sm:justify-center'>
        <Sidebar />
        <Main />
        <RigthBar />
      </div>
  )
}

export default Home