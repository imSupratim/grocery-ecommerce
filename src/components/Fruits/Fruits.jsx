import React from 'react'
import Navbar from '../Navbar/Navbar'
import Categorypage from '../Categorypage/Categorypage'
import Bgfruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <Categorypage title="Fruits & Veggies" bgImage = {Bgfruits} categories={['Fruits', 'Vegetables']}/>
    </div>
  )
}

export default Fruits
