import React from 'react'
import './Footer.css'
import  logo from '../../assets/JTGeats.png'
import  {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer-image'>
    <img src={logo} alt=' ' ></img>
    </div>
    <div>
    <ul className='list' >
    <li>Home</li>
    <li>About</li>
    <li>Menu</li>
    <li>Blog</li>
    <li>Contact</li>
    </ul>
    </div>
    <div className='facebook'>
    <BsFacebook />
    </div>
    <div className='insta'>
    <FaInstagramSquare />
    </div>



    
      
    </div>
  )
}

export default Footer
