import React from 'react';

const OrderTab = ({items}) => {
     const {name,recipe,image,price} = items
    return (
        <div>
             <div className='text-center bg-gray-100 relative'>
                <img className='w-full h-[300px]' src={image} alt="" srcset="" />
                 <p className='text-xl font-bold mt-3'>{name}</p>
                 <p>{recipe}</p>
                 <p className='bg-black text-white font-bold absolute top-3 right-3 p-3'>${price}</p>
                 <button className='uppercase mb-5 mt-2 text-[#BB8506] px-5 py-3 hover:bg-black  rounded-md border-b-2 border-[#BB8506] bg-gray-200'>Add To Cart</button>
            </div>
        </div>
    );
};

export default OrderTab;