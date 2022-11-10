import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../../assets/logo/favicon.png'
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-rose-200  text-rose-600">
            <div >
                <Link className='flex flex-col justify-center items-center ' to='/'><img className='w-1/2' src={img} alt="" ></img></Link>

                <p className="font-bold">
                    Gamingable <br />Making Content since 2002
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4 text-3xl font-bold">
                    <FaFacebookF></FaFacebookF>
                    <FaTwitter></FaTwitter>
                    <FaYoutube></FaYoutube>
                </div>
            </div>
        </footer>
    );
};

export default Footer;