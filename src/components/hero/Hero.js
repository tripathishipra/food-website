import React from 'react'
import cooking from "../../assets/cooking.png";
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
    <div className='content'>
    <h1>Authentic Home food in India</h1>
    <p className='paragraph'>JTGeats is a courier service in which authentic home cook food is delivered to a customer.</p>
    <div>
    <input type="text" className="text" placeholder="Search food you love" />
   <input type="submit" className="click" name="" id="" value="Search" />
    </div>
    </div>
    <div className='cookingimage'>
    <img src={cooking} alt="" />
    </div>
    </div>
  )
}

export default Hero;
