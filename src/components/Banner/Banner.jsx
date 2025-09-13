import React from 'react'

const Banner = (props) => {
  return (
    <div className='h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative '
    style={{backgroundImage: `url(${props.bgImage})`}}>
      <h2 className='text-5xl bg-white text-zinc-800 p-5 rounded-xl font-bold z-10'>{props.title}</h2>
      <div className='bg-black/50 absolute inset-0'> 

      </div>
    </div>
  )
}

export default Banner
