import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaQuoteLeft} from 'react-icons/fa' 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Star from '../../Component/Star/Star';


const Review = () => {
    const [review,setReview] = useState([])
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className='mb-16'>
         <SectionTitle heading={'---What Our Clients Say---'} title={'TESTIMONIALS'}></SectionTitle>
         <Swiper
                    rewind={true}
                    autoplay={{
                        delay : 2500
                     }}
                    navigation={true}
                    modules={[Navigation,Autoplay]}
                    className="mySwiper"
                 >
        
        {
            review.map(review => 
            <div key={review._id}>
               <SwiperSlide>
                   <div className='text-center w-2/3 m-auto'>
                         <Star star={review.rating}></Star>
                         <FaQuoteLeft className='text-6xl my-5 font-bold w-1/2 m-auto'></FaQuoteLeft>
                        <p>{review.details}</p>
                        <p className='text-[#CD9003] text-3xl font-bold uppercase mt-2'>{review.name}</p>
                   </div>
               </SwiperSlide>
            </div>)
        }
        </Swiper>
        </div>
    );
};

export default Review;