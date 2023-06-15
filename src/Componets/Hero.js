import React from 'react'
import './Hero.css';
const Hero = (props) => {
  return (
    <>
    <div className='hero'>
        <div className="hero-img">
        <img src={props.img} alt="homepage" />
        </div>
        <div className="hero-text">
          <h1>{props.heading}</h1>
        </div>
      </div>
    </>
      
  )
}

export default Hero;
