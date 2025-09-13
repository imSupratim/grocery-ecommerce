import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Categorypage from '../Categorypage/Categorypage'
import BgSeafood from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <Categorypage title="Meat and SeaFood" bgImage = {BgSeafood} categories={['SeaFood', 'Meat']}/>
    </div>
  )
}

export default Seafood
