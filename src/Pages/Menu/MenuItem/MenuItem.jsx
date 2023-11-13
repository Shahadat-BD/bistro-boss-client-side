import React from 'react';

const MenuItem = ({offered}) => {
    return (
        <div>
            <div key={offered._id} className='flex gap-4'>
                    <img style={{borderRadius:"0px 200px 200px 200px"}} className='w-32' src={offered?.image} alt="" srcset="" />
                    <div className='flex items-center'>
                        <div>
                            <p className='text-lg logo'>{offered.name}------------</p>
                            <p className='w-5/6'>{offered.recipe}</p>
                        </div>
                        <p className='text-[#BB8506]'>${offered.price}</p>
                    </div>
                </div>
        </div>
    );
};

export default MenuItem;