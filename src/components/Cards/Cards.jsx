import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = (props) => {
  return (
    <div className=" p-5 rounded-xl shadow-md bg-zinc-100 ">
        {/* Card Icons */}
      <div className='flex justify-between'>
        <span className='text-3xl text-zinc-400'>
            <FaHeart/>
        </span>
        <button className='bg-gradient-to-b from-teal-400 to-teal-600 text-white text-xl px-4 py-3 rounded-lg'>
            <FaPlus/>
        </button>
      </div>

        {/* Card Image */}
      <div className='w-full h-50 '>
        <img src={props.image} className='w-full h-full object-contain'/>
      </div>


        {/* Card Content */}
      <div className='text-center'>
        <h3 className='text-2xl font-semibold'>{props.title}</h3>
        <p className='text-2xl font-bold mt-4 mb-3'>${props.price.toFixed(2)}</p>
        <Button content="Shop Now"/>
      </div>
    </div>
  )
}

export default Cards
