import React from 'react'

const Heading = (props) => {
  return (
    <div className='py-20'>
            <div className=' w-fit mx-auto'>
                <h2 className='font-bold text-5xl'><span className='text-orange-500  '>{props.highlight}</span> {props.heading}</h2>
                <div className='w-36 h-1 bg-orange-300 ml-auto mt-6'></div>
            </div>
    </div>
  )
}

export default Heading
