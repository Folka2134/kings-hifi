import React from 'react';

const GalleryComponent = () => {
    return (
        <div>
            <div className="h-12 flex justify-center group bg-main-black bg-opacity-95"></div>
            <div className="h-screen bg-[url('/src/images/backgrounds/wave-haikei(5).svg')]  bg-center bg-cover lg:bg-fixed mb-56 lg:mb-0">
                <div className="h-screen p-12 md:grid-rows-none lg:grid-cols-2 xl:p-40">
                    <h2 className="text-5xl font-raleway font-bold text-font-title-color p-8"><span className="underline underline-offset-8 decoration-4">GAL</span>LERY</h2>
                    <img className="max-h-[34rem] rounded-3xl border-4 border-main-black" src="https://i.pinimg.com/736x/08/da/0d/08da0d0270c4194b2eb3083e04383f12.jpg" alt="" />
                    {/* <div className="text-center sm:text-left row-end-1 mt-24 lg:row-auto"> */}
                    {/* <p className="font-arimo text-xl 2xl:pr-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                    {/* </div> */}
                </div>
            </div>
            {/* <div className="h-24 flex justify-center group bg-main-red bg-opacity-95"></div> */}
        </div>
    );
}

export default GalleryComponent;
