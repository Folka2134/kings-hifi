import React from 'react';

import logo from "../images/kingshifilogo.png"

const CoverComponent = () => {
    return (
        <div className="h-screen bg-[url('/src/images/kingshifi-soundsystem2.png')] bg-top">
            <div className="h-screen flex justify-center items-center bg-black bg-opacity-95">
                {/* <img className="cursor-pointer h-52  hover:animate-ping absolute " src={logo} alt="logo" /> */}
                <img className="h-96 hover:animate-pulse cursor-pointer" src={logo} alt="logo" />
            </div>
        </div>
    );
}

export default CoverComponent;
