import React from 'react'
import { roomDummyData } from '../assets/assets'
import HotelCard from './HotelCard'

const FeaturedDestination = () => {
  return (
    <div className='flex flex-col in-checked: px-6 md:px-8 lg:px-10 py-10 bg-gray-50 '>
        <div className='flex gap-6 flex-wrap items-center justify-center mt-20'>
            {roomDummyData.slice(0,4).map((room,index)=>(
                <HotelCard  key={room._id} room={room} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedDestination