import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Profile from './pages/profile'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:username" element={<Profile />} >
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
