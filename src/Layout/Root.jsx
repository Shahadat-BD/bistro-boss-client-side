import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Root = () => {
    const location = useLocation()
    const isLogin =  location.pathname.includes('login')
    const isRegister =  location.pathname.includes('register')
    return (
        <div> 
           { isLogin || isRegister || <Navbar></Navbar>}
            <Outlet></Outlet>
           { isLogin || isRegister || <Footer></Footer>}
        </div>
    );
};

export default Root;