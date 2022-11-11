import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/banner/Banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there!!</h1>
                    <p className="mb-5">Welcome to my website. I am a veteran content creator. I have been making content for more then two decades. Through the years of practice I have learned some ways to game the system. So what are you waiting for?</p>
                    <Link to='/services'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;