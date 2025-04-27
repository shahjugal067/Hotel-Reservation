import React from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'



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
        <Route path='/rooms' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetails/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />

      
    </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App