import {LayoutDashboard, List, Plus } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const sidebarLinks = [
    {name:"Dashboard", path:'/owner',icon:<LayoutDashboard />},
    {name:"Add Room", path:'/owner/add-room',icon:<Plus />},
    {name:"List Room", path:'/owner/list-room',icon:<List />},
]
const Sidebar = () => {
   
  return (
    <div className='md:w-64 w-16 border-r h-full text-base pt-6 border-gray-200 flex flex-col
     transition-all duration-300'>
        
        
            <NavLink to={'/owner'} 
            className={({isActive})=>`flex items-center py-2 px-4 md:px-8 gap-3 ${isActive ? 'border-r-4 md:border-r-2 border-blue-500 bg-sky-200 text-blue-700 '
            :'hover:bg-red-200 border-white text-gray-800'}`}>
                    <LayoutDashboard className=' min-h-6 min-w-6' />
                    <p className='text-center hidden md:block'>Dashboard</p>
            </NavLink>
            <NavLink to={'/owner/add-room'} 
            className={({isActive})=>`flex items-center py-2 px-4 md:px-8 gap-3 ${isActive ? 'border-r-4 md:border-r-2 border-blue-500 bg-blue-200 text-blue-700'
            :'hover:bg-red-200 border-white text-gray-800'}`}>
                    <Plus className=' min-h-6 min-w-6' />
                    <p className='text-center hidden md:block'>Add Room</p>
            </NavLink>
            <NavLink to={'/owner/list-room'} 
            className={({isActive})=>`flex items-center py-2 px-4 md:px-8 gap-3 ${isActive ? 'border-r-4 md:border-r-2 border-blue-500 bg-blue-500 text-blue-700'
            :'hover:bg-red-200 border-white text-gray-800'}`}>
                    <List className=' min-h-6 min-w-6' />
                    <p className='text-center hidden md:block'>List Room</p>
            </NavLink>
        
    </div>
  )
}

export default Sidebar