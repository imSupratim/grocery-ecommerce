import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Categorypage from '../Categorypage/Categorypage'
import BgAll from '../../assets/all-banner.jpg'

const Allproducts = () => {
  return (
    <div>
      <Categorypage title="All Products" bgImage = {BgAll} categories={['All']}/>
    </div>
  )
}

export default Allproducts
