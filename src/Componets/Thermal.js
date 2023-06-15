import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Thermalcontain from './Thermalcontain';

const Light = () => {
  return (
    <div>
      <Navbar/>
      <Thermalcontain/>
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

export default Light
