import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.avif'
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-b border-gray-400 py-3
     px-4 md:px-8 duration-300 bg-white transition-all'>
        <Link>
        <img src={logo} alt="" className=' h-12 opacity-80 ' />
        </Link>
        <UserButton/>
    </div>
  )
}

export default Navbar