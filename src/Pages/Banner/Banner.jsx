import React from 'react';
import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {

    return (
        <div>
             <Carousel autoPlay className='text-center'>
                <div>
                      <img src={img1} alt="" srcset="" />
                </div>
                <div>
                      <img src={img2} alt="" srcset="" />
                </div>
                <div>
                      <img src={img3} alt="" srcset="" />
                </div>
                <div>
                      <img src={img4} alt="" srcset="" />
                </div>
                <div>
                      <img src={img5} alt="" srcset="" />
                </div>
                <div>
                      <img src={img6} alt="" srcset="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;