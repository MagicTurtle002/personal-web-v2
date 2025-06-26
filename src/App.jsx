import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import LiquidGlassNavbar from './components/common/Header/Header'
import AboutMeSection from './components/sections/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LiquidGlassNavbar />
      <HomePage />
    </>
  )
}

export default App;
