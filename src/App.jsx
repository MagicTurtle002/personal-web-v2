import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import LiquidGlassNavbar from './components/common/Header/Header'
import Projects from './components/sections/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LiquidGlassNavbar />
      <HomePage />
      <Projects />
    </>
  )
}

export default App;
