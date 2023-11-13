import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title}) => {
    
    return (
        <div className='mb-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
            {
                items.map(offered => <MenuItem key={offered._id} offered={offered}></MenuItem> )
            }
            
           </div>
        <div className='text-center'>
            <Link to={`/order/${title}`}>
               <button className='uppercase mb-5 mt-2 text-[#1F2937] font-semibold px-5 py-3 rounded-md border-b-2 border-[#1F2937]'>ORDER YOUR FAVOURITE FOOD</button>
            </Link>
        </div>
        </div>
    );
};

export default MenuCategory;