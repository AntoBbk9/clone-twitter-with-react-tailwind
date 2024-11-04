import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Profile from './pages/profile'
import Replie from './components/replie/replie'
import Media from './components/replie/media'
import HighLights from './components/replie/highlights'
import Likes from './components/replie/likes'
import { LoggedUserContext } from './components/context/userContext'
import { User } from './components/profile/type'
import { useState } from 'react'

function App() {
 
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  return (
    <LoggedUserContext.Provider value={{loggedUser, setLoggedUser}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:username" element={<Profile />} >
        <Route path='replie' element={<Replie />} />
        <Route path='media' element={<Media />} />
        <Route path='highlights' element={<HighLights />} />
        <Route path='likes' element={<Likes />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </LoggedUserContext.Provider>
  )
}

export default App
