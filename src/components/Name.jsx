import React from 'react'

const Name = ({name}) => {
  return (
    <div className='flex justify-center items-center h-1/3 md:h-1/2 text-cOne text-4xl md:text-6xl text-center m-3'>
        <h1>{name}</h1>
    </div>
  )
}

export default Name