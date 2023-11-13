import React from 'react';
const Cover = ({ image,title,para }) => {
    return (
        <div className="hero min-h-screen mb-16" style={{ backgroundImage: `url("${image}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="lg:w-3/4 text-center text-neutral-content">
                <div className="bg-black h-72 bg-opacity-25 pt-20 text-white">
                    <h1 className="mb-5 text-7xl font-bold logo tracking-normal	">{title}</h1>
                    <p className="mb-5 logo tracking-normal">{para}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;