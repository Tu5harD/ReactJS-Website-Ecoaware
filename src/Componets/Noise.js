import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Foodcontain from './Foodcontain';
import food from '..//Componets//food.jpeg'
const Noise = () => {
  return (
    <div>
      <Navbar/>
      <Foodcontain/>
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

export default Noise;

