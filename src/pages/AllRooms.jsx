import React, { useState } from 'react'
import { roomDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'
import { Bed, FactoryIcon, LocationEdit } from 'lucide-react'


const CheckBox = ({label, selected=false, onChange =()=>{}}) =>{
  return(
    <label className='flex items-center gap-3 cursor-pointer mt-3 text-sm'>
      <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked,label)} />
      <span>{label}</span>
    </label>
  )
}
const RadioButton = ({label, selected=false, onChange =()=>{}}) =>{
  return(
    <label className='flex items-center gap-3 cursor-pointer mt-3 text-sm'>
      <input type="radio" name='sortOption' checked={selected} onChange={()=>onChange(label)} />
      <span>{label}</span>
    </label>
  )
}
const AllRooms = () => {

  const navigate = useNavigate()
  const [openFilter, setOpenFilter] = useState(false)
 
  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite"
  ];
  const priceRanges =[
    '0 to 500',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000',
  ];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-10 lg:px-12'>
        <div>
          <div>
            <h1 className='text-3xl md:text-4xl'>Hotel Rooms</h1>
            <p className='text-sm text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing speriores.</p>

          </div>
          {roomDummyData.map((room)=>(
            <div key={room._id}
            className='flex flex-col md:flex-row gap-4 my-6 items-start border-b border-gray-200 py-10 last:pb-32' >
                <img onClick={()=>{navigate(`/rooms/${room._id}`);scrollTo(0,0)}} src={room.images[0]} alt="img" title='View Hotel Rooms'
                className='max-h-64 md:w-1/2 rounded-lg shadow-lg object-cover cursor-pointer' />
                <div className='flex flex-col md:w-1/2 gap-2'>
                  <p className='text-gray-600'>{room.hotel.city}</p>
                  <p onClick={()=>{navigate(`/rooms/${room._id}`);scrollTo(0,0)}}
                  className='text-2xl text-gray-800'>{room.hotel.name}</p>
                  <div className='flex items-center'>
                    <StarRating />
                    <p>200+ Reviews</p>
                  </div>
                  <div className='flex gap-2'>
                    <LocationEdit className='w-5 h-5 text-green-400'/>
                    <span>{room.hotel.address}</span>
                  </div>
                  {/* room aminities  */}
                  <div className='flex flex-wrap items-center  gap-2'>
                    {room.amenities.map((item,index)=>(
                        <div key={index} className='flex items-center gap-2 px-3 py-1 rounded-lg '>
                          <Bed className='w-5 h-5 text-green-400' />
                          <p>{item}</p>

                        </div>
                    ))}
                  </div>
                  <p className='text-xl text-gray-700'>${room.pricePerNight} /Night</p>
                </div>
            </div>
          ))}
        </div>
        <div className='bg-white w-80 border border-gray-300 text-gray-700 max-lg:mb-8 min-lg:mt-10'>
          <div className={`flex items-center justify-between px-5 py-2 min-lg:border-b border-gray-300 ${openFilter && 'border-b'}`}>
              <p>Filters</p>
              <div className='text-sm cursor-pointer'>
                <span onClick={()=>setOpenFilter(!openFilter)} className='lg:hidden'>{openFilter ? 'Hide' : 'Show'}</span>
                <span className='hidden lg:block'>Clear</span>
              </div>
          </div>
          <div className={`${openFilter ? 'h-auto':'h-0 lg:h-auto'} overflow-hidden transition-all duration-300 ease-in-out'}`}>
            <div className='px-5 pt-5'>
              <p className='text-gray-800 pb-2'>Popular Filters</p>
              {roomTypes.map((room,index)=>(
                <CheckBox label={room} key={index} />
              ))}
            </div>
            <div className='px-5 pt-5'>
              <p className='text-gray-800 pb-2'>Price Range</p>
              {priceRanges.map((range,index)=>(
                <CheckBox label={`$ ${range}`} key={index} />
              ))}
            </div>
            <div className='px-5 pt-5'>
              <p className='text-gray-800 pb-2'>Sort By</p>
              {sortOptions.map((option,index)=>(
                <RadioButton label={option} key={index} />
              ))}
            </div>

          </div>
        </div>
    </div>
  )
}

export default AllRooms