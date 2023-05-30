import React  from 'react'
import'./Modal.css'

function Modal ({closeModal}) {
  return (
    <div className='Modal-background'>
    <div className='modal-container'>
    <div className='modal-title'>
    <h1>Request a Dish</h1>
    </div>
    <div className='modal-name'>
    <label>Name*</label>
    <input type="text" placeholder="  Enter name of the dish" />
    </div>
    <div className='modal-html'>
    <label htmlFor="">Upload an image</label>
    <input type="text" placeholder="   Paste a URL" />
    </div>
    <div className='modal-footer'>
    <button id='submit-btn' onClick={() => closeModal(false)}>Submit</button>
    <button id='cancel-btn'  onClick={() => closeModal(false)}>Cancel</button>
    </div>

    
    </div>
    </div>
  )
}



export default Modal
