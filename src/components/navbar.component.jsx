import React from 'react';
import { FaFacebookF, FaInstagram, FaSoundcloud, FaBandcamp } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from "../images/kingshifilogo2.png"

const NavbarComponent = () => {
    return (
        <div className="md:h-16 w-80 md:w-full justify-between md:flex sticky top-0 bg-main-black bg-opacity-95 shadow-md shadow-main-black rounded-b-xl">
            <GiHamburgerMenu size={50} className='md:hidden absolute m-2 text-white ' />
            <ul className='md:flex grid justify-center text-center items-center align-middle text-white'>
                <li className='md:p-3'><img src={logo} alt="logo" className='h-16' /> </li>
                <li className='p-3 rounded-xl hover:bg-main-black'>About</li>
                <li className='p-3 rounded-xl hover:bg-main-black'>Sound-System</li>
                <li className='p-3 rounded-xl hover:bg-main-black'>Services</li>
            </ul>
            <ul className='flex justify-center text-center items-center align-middle text-white'>
                <FaFacebookF size={25} className='mx-4 cursor-pointer hover:text-blue-600 transition-all duration-150' />
                <FaInstagram size={30} className='mx-4 cursor-pointer hover:text-pink-600 transition-all duration-150' />
                <FaSoundcloud size={40} className='mx-4 cursor-pointer hover:text-orange-600 transition-all duration-150' />
                <FaBandcamp size={25} className='mx-4 md:mr-14 cursor-pointer hover:text-blue-400 transition-all duration-150' />
            </ul>
        </div >
    );
}

export default NavbarComponent;
