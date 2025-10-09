import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Productos from './components/Productos/Productos'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <Productos/>
      {/* <Footer/> */}
    </>
  )
}

export default App
