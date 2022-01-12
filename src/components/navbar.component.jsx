import React from 'react';
import { FaFacebookF, FaInstagram, FaSoundcloud, FaBandcamp } from 'react-icons/fa';


const NavbarComponent = () => {
    return (
        <div className="h-16 flex justify-between sticky top-0 bg-main-black bg-opacity-95 shadow-md shadow-main-black rounded-b-xl">
            <ul className='md:flex text-center items-center align-middle text-white'>
                <li className='p-3'>KingsHifi</li>
                <li className='p-3 rounded-xl hover:bg-main-black'>About</li>
                <li className='p-3 rounded-xl hover:bg-main-black'>Sound-System</li>
                <li className='p-3 rounded-xl hover:bg-main-black'>Services</li>
            </ul>
            <ul className='flex text-center items-center align-middle text-white'>
                <FaFacebookF size={25} className='mx-4 hover:text-blue-600 transition-all duration-150' />
                <FaInstagram size={30} className='mx-4 hover:text-pink-600 transition-all duration-150' />
                <FaSoundcloud size={40} className='mx-4 hover:text-orange-600 transition-all duration-150' />
                <FaBandcamp size={25} className='mx-4 mr-14 hover:text-blue-400 transition-all duration-150' />
            </ul>
        </div >
    );
}

export default NavbarComponent;
