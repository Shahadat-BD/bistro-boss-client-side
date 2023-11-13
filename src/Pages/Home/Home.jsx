import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';
import PopularItem from '../PopularItem/PopularItem';
import Contact from '../Contact/Contact';
import ChefRec from '../ChefRec/ChefRec';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                 <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularItem></PopularItem>
            <Contact></Contact>
            <ChefRec></ChefRec>
            <Review></Review>
        </div>
    );
};

export default Home;