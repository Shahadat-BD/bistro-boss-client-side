import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from '../../Component/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div>
           <SectionTitle title={'ORDER ONLINE'} heading={'---From 11:00am to 10:00pm---'}></SectionTitle>

            <Swiper
        slidesPerView={4}
        autoplay={{
            delay : 2500
         }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
    
        modules={[Pagination,Autoplay]}
        className="mySwiper mb-14"
      >
        <SwiperSlide className='mb-24'><img src={slide1}  /><p className='text-white font-bold text-2xl -mt-14 text-center'>SALADS</p></SwiperSlide>
        <SwiperSlide className='mb-24'><img src={slide2}  /><p className='text-white font-bold text-2xl -mt-14 text-center'>SOUPS</p></SwiperSlide>
        <SwiperSlide className='mb-24'><img src={slide3}  /><p className='text-white font-bold text-2xl -mt-14 text-center'>PIZZAS</p></SwiperSlide>
        <SwiperSlide className='mb-24'><img src={slide4}  /><p className='text-white font-bold text-2xl -mt-14 text-center'>DESSERTS</p></SwiperSlide>
        <SwiperSlide className='mb-24'><img src={slide5}  /><p className='text-white font-bold text-2xl -mt-14 text-center'>SALADS</p></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;