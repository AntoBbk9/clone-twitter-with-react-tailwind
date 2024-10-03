import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Profile from './pages/profile'
import Replie from './components/replie/replie'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:username" element={<Profile />} >
        <Route path='replie' element={<Replie />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
