import React from 'react';
import { FaStarHalfAlt , FaStar} from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({star}) => {
    const ratingStar =  Array.from({length : 5} , (elem , index ) => {
        let number = index + 0.5

     return(
          <span key={index}>
            {
                star >= index + 1 
                ? <FaStar className='icon'/> 
                : star >= number 
                ? <FaStarHalfAlt className='icon'/>
                : <AiOutlineStar className='icon'/>
            }
          </span>
     )

    })
    return (
             <p className='flex text-[#CD9003] text-3xl mb-2 w-[18%] m-auto'>{ratingStar}</p>
     );
};

export default Star;