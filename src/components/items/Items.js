import React from 'react'
import './Items.css'
import fooditem1 from '../../assets/fooditem1.png';
import fooditem9 from '../../assets/fooditem9.png';
import fooditem10 from '../../assets/fooditem10.png';
import {AiTwotoneStar} from 'react-icons/ai';
import {FaPlusSquare} from 'react-icons/fa';


const Items = () =>{
  const Data =[
    {
      id: '1',
      img : fooditem1,
      name: 'Home made pizza',
      price: '$19',
      star:"{AiTwotoneStar} 4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },
    {
      id: '2',
      img : fooditem9,
      name: 'Tandoori Chicken',
      price: '$19',
      star:"{AiTwotoneStar} 4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },
    {
      id: '3',
      img : fooditem10,
      name: 'Chilli Chicken',
      price: '$19',
      star:"{AiTwotoneStar} 4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },

  ]
  return (
    <>


    <div className='popular'>
    <h1>Popular Items</h1>
    </div>
    <div className='popular-container'>
    {Data.map((item) => {
      return(
        <div className='kitchen-card'>
        <div className='kitchen-image'>
        <img src={item.img} alt=''
        height= "220px"
        width="230px"
         />
        </div>
        <div className='kitchen-info'>
        <div className='name'><h3><pre>{item.name}</pre></h3></div>
        <div className='price'>{item.price}</div>
        </div>
        <div className='kitchen-detail'>
        <div className='star'>
        <AiTwotoneStar /> 4.7 [50-60 min]
        </div>
      
        <div className='plussign'>
        <FaPlusSquare />
        </div>
        </div>
        </div>
    
         
      )
    })}
    
    </div>
    </>
  
  )
}

    






export default Items
