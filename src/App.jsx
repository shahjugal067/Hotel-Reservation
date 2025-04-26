import React from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

import Register from './pages/Register'
import Header from './components/Header'



const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');

  
  return (
    <div>
      {!isOwnerPath && <Header/> }
      <div>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      
    </Routes>
      </div>
    </div>
  )
}

export default App