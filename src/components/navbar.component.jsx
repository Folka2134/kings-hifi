import React from 'react';
import { FaFacebookF, FaInstagram, FaSoundcloud, FaBandcamp } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from "../images/kingshifilogo2.png"

const NavbarComponent = () => {
    return (
        <div className="min-h-[4rem] w-80 justify-between sticky top-0 bg-main-black bg-opacity-95 shadow-md shadow-main-black rounded-b-xl z-10 md:h-16 md:w-full md:flex">
            <GiHamburgerMenu size={50} className='md:hidden absolute m-2 text-white ' />
            <nav className='md:flex md:w-full md:justify-between hidden transition-all duration-150 '>
                <ul className='grid justify-center text-center items-center align-middle text-white md:flex' >
                    <li className='md:p-3'><img src={logo} alt="logo" className='h-16' /> </li>
                    <li className='p-3 rounded-xl hover:bg-main-black'>About</li>
                    <li className='p-3 rounded-xl hover:bg-main-black'>Sound-System</li>
                    <li className='p-3 rounded-xl hover:bg-main-black'>Services</li>
                </ul>
                <ul className='flex justify-center text-center items-center align-middle text-white'>
                    <FaFacebookF size={25} className='mx-4 cursor-pointer transition-all duration-150 hover:text-blue-600' />
                    <FaInstagram size={30} className='mx-4 cursor-pointer transition-all duration-150 hover:text-pink-600' />
                    <FaSoundcloud size={40} className='mx-4 cursor-pointer transition-all duration-150 hover:text-orange-600' />
                    <FaBandcamp size={25} className='mx-4 cursor-pointer transition-all duration-150 hover:text-blue-400 md:mr-14 ' />
                </ul>
            </nav>
        </div >
    );
}

export default NavbarComponent;
