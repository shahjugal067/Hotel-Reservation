import { Star } from 'lucide-react'
import React from 'react'

const StarRating = ({rating = 4 }) => {
  return (
    <div className='flex items-center'>
        <>
        {Array(5).fill('').map((_, index) => (
             <Star
             key={index}
             className={`w-4 h-4 ${rating > index ? 'text-yellow-400' : 'text-gray-300'}`}
           />
         ))}
        </>
    </div>
  )
}

export default StarRating