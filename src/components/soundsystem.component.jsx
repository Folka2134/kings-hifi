import React from 'react';

import soundsystem from "../images/kingshifi-soundsystem.jpg"

const SoundsystemComponent = () => {
    return (
        <div className="system-container h-[80vh] grid align-middle">
            <div className="grid gap-20 row-1 justify-items-center content-center p-12 md:grid-rows-none lg:grid-cols-2 lg:gap-24 xl:px-40">
                <div className="row-end-1 text-center sm:text-right lg:row-auto 2xl:ml-52 self-center">
                    <h2 className="text-5xl font-raleway font-bold text-font-title-color p-8">SOUND-<span className="underline underline-offset-8 decoration-4 decoration-main-red">SYSTEM</span></h2>
                    <p className="font-arimo text-xl 1xl:pl-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h2 className="text-5xl font-raleway font-bold text-font-title-color p-8">SERVICES</h2>
                    <p className="font-arimo text-xl 1xl:pl-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="grid md:flex justify-center items-center">
                    <img className="max-h-[34rem] rounded-3xl border-4 border-main-black" src={soundsystem} alt="sound system" />
                </div>
            </div>
        </div>
    );
}

export default SoundsystemComponent;
