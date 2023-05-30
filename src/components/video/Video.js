import {useState} from 'react';
import Modal from '../Modal';
import photo from '../../assets/Vimage.jpg';
import './Video.css';


function Video ()  {
  const [openModal, setOpenModal]= useState(false);
  
  return (
    <>
    <div className='request-container'>
    <button className='Btn' onClick={() => {setOpenModal(true);}}>Request  a  Dish</button>
    {openModal && <Modal  closeModal={setOpenModal}/>}
    </div>

    <div className='videosection'>
    <h1>We are providing best <br /> 
home cooked food delivery service.</h1>
  <p>Away from home and craving the tasty homemade recipes? <br />
Choose from a selection of our delicious home cooked dishes </p>
   <img src={photo} alt=""  />
   <div className="background"></div>
    </div>
    </>
  )
}

export default Video
