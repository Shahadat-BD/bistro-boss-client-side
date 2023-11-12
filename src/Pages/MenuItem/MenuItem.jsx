import React, { useEffect } from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import useMenu from '../../Hook/useMenu/useMenu';

const MenuItem = () => {
    const menu = useMenu()
    console.log(menu);
    const saladsItem = menu[0].filter(menu => menu.category === 'salad')
    console.log(saladsItem);
    return (
        <div className='mb-16'>
            <SectionTitle heading={'---Check it out---'} title={'FROM OUR MENU'}></SectionTitle>
           <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
           {
                saladsItem.slice(3).map(salad => 
                <div key={salad._id} className='flex gap-4'>
                    <img style={{borderRadius:"0px 200px 200px 200px"}} className='w-32' src={salad.image} alt="" srcset="" />
                    <div className='flex items-center'>
                        <div>
                            <p className='text-lg logo'>{salad.name}------------</p>
                            <p className='w-5/6'>{salad.recipe}</p>
                        </div>
                        <p className='text-[#BB8506]'>${salad.price}</p>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default MenuItem;