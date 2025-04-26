import { LocateIcon, Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({ room,index }) => {


  return (
    
        <Link to={'/rooms/' + room._id} onClick={()=> scrollTo(0,0)} key={room._id} 
        className=' relative max-w-72 w-full  rounded-xl overflow-hidden bg-white text-gray-500 shadow-lg shadow-yellow-200'>
          <img src={room.images[0]} alt="" className='w-72 h-50 object-cover' />
          { index % 2 === 0 &&
           <p className='px-3 py-1 absolute top-3 left-3 text-gray-800 border border-yellow-300 bg-amber-50 rounded-lg text-xs'>Best Seller</p>}
          <div className='p-4 pt-5'>
           <div className='flex items-center justify-between'>
            <p className='text-xl text-gray-700'>{room.hotel.name}</p>
            <div className='flex items-center gap-1'>
              <Star className='w-3 h-3' /> 4.5
            </div>
           </div>
           <div>
            <LocateIcon className='w-4 h-4 text-yellow-300' />
            <span>{room.hotel.address}</span>
           </div>
           <div>
            <p><span>${room.pricePerNight}</span> /night</p>
            <button className='px-4 py-2 text-sm border border-amber-300 rounded-lg
             hover:bg-amber-500 transition-all shadow-lg shadow-red-400'>Book Now</button>
           </div>
          </div>
        </Link>
   
  )
}

export default HotelCard