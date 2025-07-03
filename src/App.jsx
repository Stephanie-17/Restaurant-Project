import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../Components/NavBar'
import Container from '../Components/Container'
import Menu from '../Components/Menu'
import Contact from '../Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Container />
     <Menu/>
     <Contact />
    </>
  )
}

export default App
