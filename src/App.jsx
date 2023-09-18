import { useState } from 'react'
import './App.css'
import Contact from './contact.jsx'
// import About from './About.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Contact />
      {/* <About /> */}
      </div>
    </>
  )
}

export default App
