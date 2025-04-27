import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import logo from '../assets/logo.avif'

const Footer = () => {
  return (
    <div className='text-gray-500 bg-green-100 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
    <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
        <div className='max-w-80'>
            <img src={logo}alt="logo" className='mb-4 h-10 ' />
            <p className='text-sm'>
                Lorem Ipsum is simply dummy text of the printing stry's standard dummy text
            </p>
            <div className='flex items-center gap-3 mt-4'>
                {/* Instagram */}
               <a href="www.instagram.com/shah.jugal.123" ><Instagram className='w-5 h-5 hover:scale-105 transition-all text-yellow-400 bg-black/50'/></a>
                {/* Facebook */}
                <a href=""><Facebook className='w-5 h-5 text-blue-500 hover:scale-105 transition-all rounded-lg'/></a>
                {/* Twitter */}
                <a href=""><Twitter className='w-5 h-5 text-yellow-500 hover:scale-105 transition-all  rounded-lg'/></a>
                {/* LinkedIn */}
                <a href=""><Linkedin className='w-5 h-5 text-yellow-500 hover:scale-105 transition-all rounded-lg'/></a>
            </div>
        </div>

        <div>
            <p className='text-lg text-gray-800'>COMPANY</p>
            <ul className='mt-3 flex flex-col gap-2 text-sm'>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Partners</a></li>
            </ul>
        </div>

        <div>
            <p className='text-lg text-gray-800'>SUPPORT</p>
            <ul className='mt-3 flex flex-col gap-2 text-sm'>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Safety Information</a></li>
                <li><a href="#">Cancellation Options</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Accessibility</a></li>
            </ul>
        </div>

        <div className='max-w-80'>
            <p className='text-lg text-gray-800'>STAY UPDATED</p>
            <p className='mt-3 text-sm'>
                Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className='flex items-center mt-4'>
                <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                    <ArrowRight className='w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-all' />   
                </button>
            </div>
        </div>
    </div>
    <hr className='border-gray-300 mt-8' />
    <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Sitemap</a></li>
        </ul>
    </div>
</div>
  )
}

export default Footer