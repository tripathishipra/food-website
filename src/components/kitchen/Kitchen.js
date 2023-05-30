// import React from 'react';
// import fooditem1 from '../../assets/fooditem1.png';
// import fooditem2 from '../../assets/fooditem2.png';
// import fooditem3 from '../../assets/fooditem3.png';
// import fooditem4 from '../../assets/fooditem4.png';
// import fooditem5 from '../../assets/fooditem5.png';
// import fooditem6 from '../../assets/fooditem6.png';
// import fooditem7 from '../../assets/fooditem7.png';
// import fooditem8 from '../../assets/fooditem8.png';

// import './Kitchen.css'

// const Kitchen = () => {
//   return (
//     <div className='Menu'>
//     <h1>Home Kitchen</h1>
//     <div className='fooditems'>
//     <img src={fooditem1} alt='' />
//     <img src={fooditem2} alt='' />
//     <img src={fooditem3} alt='' />
//     <img src={fooditem4} alt='' />
//     <img src={fooditem5} alt='' />
//     <img src={fooditem6} alt='' />
//     <img src={fooditem7} alt='' />
//     <img src={fooditem8} alt='' />
//     </div>
//     </div>
//   )
// }

// export default Kitchen;

import React from 'react'
import  fooditem1 from '../../assets/fooditem1.png';
import fooditem2 from '../../assets/fooditem2.png';
import fooditem3 from '../../assets/fooditem3.png';
import fooditem4 from '../../assets/fooditem4.png';
import fooditem5 from '../../assets/fooditem5.png';
import fooditem6 from '../../assets/fooditem6.png';
import fooditem7 from '../../assets/fooditem7.png';
import fooditem8 from '../../assets/fooditem8.png';
import {AiTwotoneStar} from 'react-icons/ai';
import {FaPlusSquare} from 'react-icons/fa';

import './Kitchen.css'

function kitchen () {
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
      img : fooditem2,
      name: 'Home made pizza',
      price: '$25',
      star: "{AiTwotoneStar}4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },

    {
      id: '3',
      img : fooditem3,
      name: 'Home made pizza',
      price: '$19',
      star: "{AiTwotoneStar}4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },
     
    {
      id: '4',
      img : fooditem4,
      name: 'Home made pizza',
      price: '$19',
      star: "{AiTwotoneStar}4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },
    
    {
      id: '5',
      img : fooditem5,
      name: 'Home made pizza',
      price: '$19',
      star: "{AiTwotoneStar}4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },
    
    {
      id: '6',
      img : fooditem6,
      name: 'Home made pizza',
      price: '$19',
      star: "{AiTwotoneStar}4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },
    
    {
      id: '7',
      img : fooditem7,
      name: 'Home made pizza',
      price: '$19',
      star: "{AiTwotoneStar}4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },
    
    {
      id: '8',
      img : fooditem8,
      name: 'Home made pizza',
      price: '$19',
      star: "{AiTwotoneStar}4.7 [50-60 min] ",
      plussign: {FaPlusSquare},

    },
    

  ]          

  return (
    <>
     <div className='kitchen-text'>
     <h1>Home Section</h1>
     </div>
    <div className='kitchen-container'>
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

export default kitchen


