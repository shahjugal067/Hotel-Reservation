import React from 'react'

const Title = ({ title, subTitle, align ,font }) => {
  return (
    <div>
        <h1 className={`text-3xl md:text-2xl ${font || 'font-light'}`}>{title}</h1>
    </div>
  )
}

export default Title