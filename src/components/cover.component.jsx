import React from 'react';

import { Link } from 'react-scroll/modules';

import logo from "../images/kingshifilogo.png"

const CoverComponent = () => {
    return (
        <div className="h-screen bg-[url('/src/images/kingshifi-soundsystemnew.png')] bg-top bg-fixed">
            <div className="h-screen bg-black bg-opacity-95">
                <Link className="h-screen w-auto flex justify-center items-center" to="about-container" smooth={true} >
                    <img className="h-1/3 hover:animate-fast-pulse cursor-pointer" src={logo} alt="logo" />
                </Link>
            </div>
        </div>
    );
}

export default CoverComponent;
