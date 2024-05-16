import React from 'react'
import Nav from './Components/Nav'
import {Routes,Route} from 'react-router-dom'

import Home from './Components/Home'
import Register from './Components/Register'
import Show from './Components/Show'
const App = () => {
  return (
    <div >
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/show" element={<Show />} />
      </Routes>  
    </div>
  )
}

export default App