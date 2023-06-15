import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Aircontain from './Aircontain';
import air from '..//Componets//air.jpeg'

const Air = () => {
  return (
    <div>
      <Navbar/>
      <Aircontain/>
      <Footer 
      firstHeading = 'Earth'
      lastHeading = 'Pollution'
      contact = '+91 7499833141'
      firstLocation = '32 Shirala'
      lastLocation = 'Maharastra, India'
      email = 'tushardukane9@gmail.com'
      />
    </div>
  )
}

export default Air
