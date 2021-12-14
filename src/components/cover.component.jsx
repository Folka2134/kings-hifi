import React from 'react';

import logo from "../images/kingshifilogo.png"

const CoverComponent = () => {
    return (
        <div className="h-screen bg-[url('/src/images/kingshifi-soundsystem2.png')] bg-top bg-fixed">
            <div className="h-screen flex justify-center items-center bg-black bg-opacity-95">
                <img className="h-1/3 hover:animate-pulse cursor-pointer" src={logo} alt="logo" />
            </div>
        </div>
    );
}

export default CoverComponent;
