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
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'



const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');

  
  return (
    <div>
      {!isOwnerPath && <Header/> }
      {false && <HotelReg/>}
      <div>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/rooms' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetails/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/owner' element={<Layout/>}>
          
        </Route>

      
    </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App