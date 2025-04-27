import { X } from 'lucide-react'
import React from 'react'
import regimg from '../assets/img8.jpg'
import { cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 border-0 left-0 right-0 z-100 flex h-screen items-center justify-center bg-black/70'>
        <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2' >
            <img src={regimg} className='w-1/2 rounded-lg hidden md:block ' alt="" />

            <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
                <X className='w-5 h-5 text-red-500 absolute right-4 top-3 cursor-pointer'/>
                <p className='text-2xl mt-6'>Register Your Hotel</p>
                {/* hotel name  */}
                <div className='w-full mt-4'>
                    <label htmlFor="name">Hotel Name</label>
                    <input type="text" className='border border-amber-300 rounded-lg w-full px-3 py-2 mt-1' 
                    required placeholder='Enter here..' id='name' />
                </div>
                <div className='w-full mt-4'>
                    <label htmlFor="contact">Phone</label>
                    <input type="number" className='border border-amber-300 rounded-lg w-full px-3 py-2 mt-1' 
                    required placeholder='Enter here..' id='contact'/>
                </div>
                <div className='w-full mt-4'>
                    <label htmlFor="address">Address</label>
                    <input type="text" className='border border-amber-300 rounded-lg w-full px-3 py-2 mt-1' 
                    required placeholder='Enter here..' id='address'/>
                </div>
                {/* select city */}
                <div className='w-full mt-4 max-w-60 mr-auto'>
                    <label className='text-gray-500' htmlFor="city">City</label>
                    <select  id="city" className='border border-gray-300 rounded-lg w-full px-3
                     py-2 mt-1 ' required>
                        <option value="">Select City</option>
                        {cities.map((city)=>(
                            <option key={city} value={city}>{city}</option>
                        ))}
                     </select>
                </div>
                <button className='bg-indigo-500 hover:bg-indigo-700 transition-all text-white mr-auto px-6 py-2 rounded-lg cursor-pointer mt-6'>
                    Register
                </button>
            </div>
        </form>
        
    </div>
  )
}

export default HotelReg