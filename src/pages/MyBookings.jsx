import React, { useState } from 'react'
import Title from '../components/Title'
import { userBookingsDummyData } from '../assets/assets'
import { LocationEdit, User } from 'lucide-react'

const MyBookings = () => {
    const [bookings,setBookings] = useState(userBookingsDummyData)
  return (
    <div className='py-28 md:py-36 px-4 md:px-10 lg:px-12'>
        <Title title={'My Bookings'} subTitle={'View and manage your bookings here'}/>
        <div className='max-w-6xl mt-8 w-full text-gray-800'>
            <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 text-base py-3'>
                <div className='w-1/3'>Hotels</div>
                <div className='w-1/3'>Date & Timings</div>
                <div className='w-1/3'>Payments</div>
            </div>
            {bookings.map((booking)=>(
                <div key={booking._id} className=' grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full py-6 border-b border-gray-300'> 
                {/* hotel details  */}
                    <div className='flex flex-col md:flex-row gap-4'>
                        <img src={booking.room.images[0]} alt="img"
                        className='min-md:w-44 h-36 rounded-lg shadow-lg shadow-yellow-300 object-cover' />
                    
                    {/* date and times */}
                    <div className='flex flex-col gap-1 max-md:mt-3 min-md:ml-4'>
                        <p className='text-2xl'>
                            {booking.hotel.name}
                            <span className='text-sm'>({booking.room.roomType})</span>
                        </p>
                     <div className='flex items-center gap-1 text-sm text-gray-500'>
                            <LocationEdit className='w-5'/>
                            <span>{booking.hotel.address}</span>
                        </div>
                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                            <User className='w-5'/>
                            <span>Guests:{booking.guests}</span>
                        </div>
                        <p>Total: ${booking.totalPrice}</p>
                    </div>
                    </div>
                    {/* dates and times  */}
                    <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-6'>
                        <div>
                            <p>Check-In:</p>
                            <p className='text-gray-500 text-sm'>
                                {new Date(booking.checkInDate).toDateString()}
                            </p>
                        </div>
                        <div>
                            <p>Check-Out:</p>
                            <p className='text-gray-500 text-sm'>
                                {new Date(booking.checkOutDate).toDateString()}
                            </p>
                        </div>
                    </div>
                    {/* payment status */}
                    <div className='flex flex-col items-start justify-center pt-3'>
                        <div className='flex items-center gap-2'>
                            <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' :'bg-red-600'}`}>
                            </div>
                            <p className={`text-sm ${booking.isPaid ? 'text-green-500' :'text-red-600'}`}>
                                {booking.isPaid ? 'Paid' : 'Unpaid'}
                            </p>
                        </div>
                        {!booking.isPaid && (
                            <button className='bg-green-400 px-4 py-2 rounded-lg text-xs transition-all cursor-pointer hover:bg-green-800'>Pay Now</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyBookings