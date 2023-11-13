import React from 'react';
import Cover from '../../../Shared/Cover/Cover';
import contactImage from "../../../assets/contact/banner.jpg";
import { Helmet } from 'react-helmet-async';
const ContactUs = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>
            <Cover image={contactImage} title={'CONTACT US'} para={'Would you like to try a dish?'}></Cover>
        </div>
    );
};

export default ContactUs;