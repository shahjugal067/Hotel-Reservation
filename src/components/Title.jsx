import React from 'react'

const Title = ({ title, subTitle, align ,font }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === 'left' && 'md:items-start md:text-left'}`}>
        <h1 className={`text-3xl md:text-2xl ${font || 'font-light'}`}>{title}</h1>
        <p className={'text-sm md:text-base mt-2 text-gray-500 max-w-174 '}>{subTitle}</p>
    </div>
  )
}

export default Title