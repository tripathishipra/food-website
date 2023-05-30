import React from 'react'
import './Connect.css'
import  foodboy from "../../assets/foodboy.png";
const Connect = () => {
  return (
    <div className='contact'>
    <div className='contact-area'>
    <h3>Do you have a question
     or want to be seller?</h3>
     <p>Fill this form and our manager will contact you next 48 hours.</p>
    <form action="https://formspree.io/f/xaykpkqq" method="POST" className='contact-form'>
    <div className='name'>
    <input type="text" placeholder='Your Name' name='username' required autoComplete='off' />
    <input type="text"  placeholder='Your e-mail' name='Email' required autoComplete='off' />
    </div>
    <textarea name='message' cols="30" rows="10" className='message' placeholder='Your Message' required autoComplete='off' ></textarea>
    <input type="submit" value="submit" className='submit' />
    </form>
    </div>
    <div className="contact-img">
    <img src={foodboy} alt="" />
    </div>
    </div>
  )
}

export default Connect
