import React from 'react'
import Navbar from '../Navbar/Navbar'
import Categorypage from '../Categorypage/Categorypage'
import BgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <Categorypage title="Dairy and Eggs" bgImage = {BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
