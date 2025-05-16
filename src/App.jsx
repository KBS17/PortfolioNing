import { useState } from 'react'
import Navbar from './components/nav'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contect'

function App() {
  const [count, setCount] = useState(0)

  return (
     
    <div className="App">
      <Navbar />
      <Home />
      <Project />
      <About />
      <Contact />
    </div>

  )
}

export default App
