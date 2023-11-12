import React from 'react';

const SectionTitle = ({heading,title}) => {
    return (
        <div className='text-center  w-[330px] m-auto my-16'>
           <p className='border-b-2 border-gray-300 text-[#D99904] pb-3 font-normal italic'>{heading}</p>
           <p className='text-3xl font-medium py-3 border-b-2 border-gray-300' >{title}</p>
        </div>
    );
};

export default SectionTitle;