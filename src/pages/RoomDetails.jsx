import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomCommonData, roomDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';
import { Bed, LocationEdit } from 'lucide-react';

const RoomDetails = () => {
    const { id }  = useParams()
    const [ room ,setRoom ] = useState(null)
    const [ mainImage  ,setMainImage ] = useState(null)

    useEffect(()=>{
        
      const room =   roomDummyData.find( room => room._id.toString() === id)
      room && setRoom(room)
      room && setMainImage(room.images[0])

    },[id]);

  return room &&  (
    <div className='py-28 md:py-36 px-4 md:px-10 lg:px-12 '>
        <div className='flex flex-col gap-4 md:flex-row items-start md:items-center'>
            <h1 className='text-4xl md:text-5xl'>{room.hotel.name}</h1>
            <p className='text-sm md:text-base border rounded-full border-gray-400 px-4 bg-yellow-300'>20% OFF</p>
        </div>
        <div>
            <StarRating />
            <p className='ml-2'>200+ Reviews</p>
        </div>
        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <LocationEdit className='w-4 h-4 text-green-400' />
            <span>{room.hotel.address}</span>
        </div>
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="Room Image" className='w-[600px] h-[400px] rounded-lg shadow-lg shadow-yellow-400 object-cover' />
            </div>
            <div className='grid grid-cols-2 lg:w-1/2 w-full gap-4'>
                {room?.images.length > 1 && room.images.map((image, index) => (
                    <img onClick={()=>setMainImage(image)} src={image} alt="Room Image" key={index}
                    className={`w-full h-[190px] rounded-lg shadow-md shadow-green-400 object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                ))}
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1>Experience the Best Luxurious Rooms</h1>
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {room.amenities.map((item,index)=>(
                        <div key={index} className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100'>
                            <Bed className='w-4 h-4 text-green-400' />
                            <p className='text-xs'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p className='text-2xl'><span>${room.pricePerNight}</span> /night</p>
        </div>
        <form className='flex bg-gray-200 flex-col md:flex-row shadow-lg shadow-yellow-400 p-6
         mx-auto mt-16 max-w-6xl items-start md:items-center justify-between rounded-lg' >
            <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-8 to-gray-700'>
                <div className='flex flex-col'>
                    <label htmlFor='checkInDate'>Check-In</label>
                    <input type="date" required id="checkInDate" placeholder='checked in ' 
                     className='w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 '/>
                </div>
                <div className='flex flex-col '>
                    <label htmlFor='checkOutDate'>Check-Out</label>
                    <input type="date" required id="checkOutDate" placeholder='checked Out' 
                     className='w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 '/>
                </div>
                <div className='flex flex-col '>
                    <label htmlFor='guests'>Guests</label>
                    <input type="number" required id="guests" placeholder='0' 
                     className='w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 '/>
                </div>
                
            </div>
            <button className='bg-yellow-300 px-6 py-2 rounded-lg cursor-pointer'>Check Availability</button>
        </form>
        <div className='mt-20 space-y-4'>
            {roomCommonData.map((spe,index)=>(
                <div key={index} className='flex items-start gap-2'>
                    <img src={spe.icon} alt="" className='w-6 h-6' />
                    <div>
                        <p>{spe.title}</p>
                        <p>{spe.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='max-w-3xl border-y border-gray-300 my-14 py-10 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nesciunt facere doloremque quia, illo sed vero, 
                fuga molestias assumenda est alias distinctio nobis tempore eligendi 
                suscipit quidem ratione exercitationem impedit.</p>

        </div>
        <div className='flex flex-col items-start gap-4'>
                <div className='flex gap-4'>
                    <img src={room.hotel.owner.image} alt="host" 
                    className='h-12 w-12 rounded-full object-cover md:h-16' />
                    <div>
                        <p className='text-lg'>Hosted by {room.hotel.name}</p>
                        <div className='flex items-center mt-1'>
                            <StarRating />
                            <p>200+ reviews</p>
                        </div>
                    </div>
                </div>
                <button className='px-6 py-2 rounded-lg bg-yellow-300 hover:bg-amber-600 cursor-pointer transition-all'>
                    Contacts Now
                </button>
        </div>
    </div>
  )
}

export default RoomDetails