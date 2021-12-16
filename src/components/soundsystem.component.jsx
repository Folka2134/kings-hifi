import React from 'react';

import soundsystem from "../images/kingshifi-soundsystem.jpg"

const SoundsystemComponent = () => {
    return (
        <div className="about-container h-screen bg-[url('/src/images/backgrounds/wave-haikei(1).svg')] bg-center bg-cover lg:bg-fixed">
            <div className="h-screen grid grid-cols-1 grid-rows-2 gap-20 row-1 justify-items-center content-center p-12 md:grid-rows-none lg:grid-cols-2 lg:gap-44 xl:p-40">
                <div className="row-end-1 text-center sm:text-right mt-24 lg:row-auto 2xl:ml-52">
                    <h2 className="font-raleway font-bold text-font-title-color text-5xl p-8">SOUND SYS<span className="underline underline-offset-8 decoration-4 decoration-main-red">TEM</span></h2>
                    <p className="text-xl font-arimo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="grid md:flex justify-center items-center">
                    <img className="h-96 lg:h-3/4 rounded-3xl border-4 border-main-black" src={soundsystem} alt="sound system" />
                </div>
            </div>
        </div>
    );
}

export default SoundsystemComponent;
