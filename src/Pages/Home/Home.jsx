import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';
import MenuItem from '../MenuItem/MenuItem';
import Contact from '../Contact/Contact';
import ChefRec from '../ChefRec/ChefRec';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <MenuItem></MenuItem>
            <Contact></Contact>
            <ChefRec></ChefRec>
            <Review></Review>
        </div>
    );
};

export default Home;