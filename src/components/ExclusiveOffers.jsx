import React from 'react'
import Title from './Title'
import { ArrowRight } from 'lucide-react'
import { exclusiveOffers } from '../assets/assets'

export const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-8 lg:px-10 py-10'>
        <div className='flex flex-col items-center md:flex-row justify-between w-full'>
            <Title title={'Exclusive Offers'} subTitle={'Get the best deals offer and specials package to enhace and create unforgotable memories'} 
            align={'left'} />
            <button className='flex group  px-4 py-2 gap-2 rounded-2xl group-hover:translate-x-1 transition-all cursor-pointer items-center bg-amber-300 text-sm hover:bg-amber-500'>View All Offers 
                <span><ArrowRight className='w-5 h-5 invert group-hover:translate-x-1 transition-all'/></span>
                </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            {exclusiveOffers.map((item)=>(
                <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt18
                 rounded-lg bg-white bg-no-repeat bg-cover bg-center ' style={{backgroundImage:`url(${item.image})`}}>
                    <div className='p-8'>
                    <p className='px-2 py-1 absolute top-3 left-3 text-gray-800 border border-yellow-300 bg-amber-50 rounded-lg text-xs'>{item.priceOff}% OFF</p>
                    <div>
                    <h1 className='text-2xl '>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <h1 className='text-sm'>Expired:{item.expiryDate}</h1>
                    </div>
                    <button className='flex items-center gap-2 group-hover:translate-x-1 cursor-pointer mt-5 mb-5 bg-amber-400 rounded-lg px-4 py-2'>View Offers 
                        <ArrowRight className='w-4 h-4 text-green-400 invert group-hover:translate-x-1 transition-all'/>
                    </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
