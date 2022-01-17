import React from 'react';

import aboutPic from "../images/kingshifi-crew.jpg"
// import sidebanner from "../images/side-banner.png"

const AboutComponent = () => {
    return (
        <div className="about-container h-[80vh] grid align-middle">
            <div className="grid grid-cols-1 grid-rows-2 gap-20 row-1 justify-items-center content-center p-12 md:grid-rows-none lg:grid-cols-2 lg:gap-24 2xl:px-40 ">
                {/* <div className="grid md:flex justify-center items-center"> */}
                <img className="max-h-[28rem] rounded-3xl border-4 border-main-black" src={aboutPic} alt="Crew pic" />
                {/* </div> */}
                <div className="text-center sm:text-left row-end-1 lg:row-auto self-center">
                    <h2 className="text-5xl font-raleway font-bold text-font-title-color p-8"><span className="underline underline-offset-8 decoration-4 decoration-main-red">KINGS</span>-HIFI</h2>
                    <p className="font-arimo text-xl 2xl:pr-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;