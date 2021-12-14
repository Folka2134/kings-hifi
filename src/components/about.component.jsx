import React from 'react';

const AboutComponent = () => {
    return (
        <div className="about-container h-screen bg-[url('/src/images/kingshifi-whitebackground2.svg')] bg-cover">
            <div className="h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-none md:gap-44  justify-items-end content-center p-12 md:p-40">
                <div className="grid items-center">
                    <img src="https://i.pinimg.com/736x/08/da/0d/08da0d0270c4194b2eb3083e04383f12.jpg" alt="" />
                </div>
                <div className="mt-24">
                    <h2 className="p-8 text-6xl">KINGS-HIFI</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
