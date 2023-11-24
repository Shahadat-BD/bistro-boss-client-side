import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div className='pt-5 pb-10 lg:px-20 bg-white'>
        <div className='-mt-16 -mb-7'>
            <SectionTitle title={"PAYMENT GATEWAY"} heading={"---payment section?---"}></SectionTitle>
        </div>
        
        <div>
            <Elements stripe={stripePromise}>
               <CheckoutForm></CheckoutForm>
            </Elements>
        </div>

        </div>
    );
};

export default Payment;