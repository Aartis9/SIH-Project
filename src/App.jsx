import { useState } from 'react'
import './App.css'
import Contact from './contact.jsx'
import About from './About.jsx'
import {Routes,Route} from 'react-router-dom'
// import Homepage from './Homepage'
import Navbare from './Navbare'
import Postjob from './Postjob'
import Compinfo from './Compinfo'
import Alljob from './Alljob.jsx'
function App() {

  return (
    <>
      <div className="App">

        <Navbare/>
        <Routes>
        <Route element={<Alljob />} path="/Alljob"/>
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Postjob />} path="/Postjob" />
          <Route element={<Compinfo />} path="/Compinfo"/>
          
        </Routes>
      
      </div>
    </>
  )
}

export default App
