import React from 'react'
import { roomDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col in-checked: px-6 md:px-8 lg:px-10 py-10 bg-gray-50 '>
      <Title title={'Featured Destinations'} subTitle={'Discover your dream destination'} />
        <div className='flex gap-6 flex-wrap items-center justify-center mt-20'>
            {roomDummyData.slice(0,4).map((room,index)=>(
                <HotelCard  key={room._id} room={room} index={index}/>
            ))}
        </div>
        <button onClick={()=>{navigate('/rooms');scrollTo(0,0)}} 
        className='my-16 mx-auto px-10 py-2 text-sm border border-amber-300 rounded-lg hover:bg-amber-500 transition-all c cursor-pointer'>
          View All 
        </button>
    </div>   
  )
}

export default FeaturedDestination