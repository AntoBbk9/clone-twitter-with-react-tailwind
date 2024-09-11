import './App.css'
import Main from './components/main'
import RigthBar from './components/rigthBar/rigthBar'
import Sidebar from './components/sidebar/sidebar'

function App() {
 

  return (
    <>
      <div className='flex justify-center'>
        <Sidebar />
        <Main />
        <RigthBar />
      </div>
    </>
  )
}

export default App
