import React from 'react'
import {GiHamburgerMenu} from  'react-icons/gi'
import { AiOutlineSearch} from  'react-icons/ai'
import { BsHandbag }        from  'react-icons/bs'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='container'>
     <hi><span><logo/>JT</span>Geats</hi>
     </div>
    <ul className='nav-menu'>
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Menu</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Contact</a></li>
  </ul>
  <div className='hamburger'>
   <GiHamburgerMenu />
  </div>

  <div className='search'>
   <AiOutlineSearch />
 </div>
  <div className='cart'>
  <BsHandbag />
  </div>
  </div>
  )
}

export default Navbar;
