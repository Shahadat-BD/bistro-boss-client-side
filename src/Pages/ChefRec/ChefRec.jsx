import React from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
const ChefRec = () => {
    return (
        <div className='mb-16'>
            <SectionTitle title={'CHEF RECOMMENDS'} heading={'---Should Try---'}></SectionTitle>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            <div className='text-center bg-gray-100'>
                <img className='w-full h-[350px]' src={slide1}  />
                 <p className='text-xl font-bold mt-3'>Caeser Salad</p>
                 <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                 <button className='uppercase mb-5 mt-2 text-[#BB8506] px-5 py-3 rounded-md border-b-2 border-[#BB8506] bg-gray-200'>Add To Cart</button>
            </div>

            <div className='text-center bg-gray-100'>
                <img className='w-full h-[350px]' src={slide2}  />
                 <p className='text-xl font-bold mt-3'>Caeser Salad</p>
                 <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                 <button className='uppercase mb-5 mt-2 text-[#BB8506] px-5 py-3 rounded-md bg-[#1F2937]'>Add To Cart</button>
            </div>

            <div className='text-center bg-gray-100'>
                <img className='w-full h-[350px]' src={slide3}  />
                 <p className='text-xl font-bold mt-3'>Caeser Salad</p>
                 <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                 <button className='uppercase mb-5 mt-2 text-[#BB8506] px-5 py-3 rounded-md border-b-2 border-[#BB8506] bg-gray-200'>Add To Cart</button>
            </div>
            </div>
        </div>
    );
};

export default ChefRec;