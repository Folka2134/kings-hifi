import React from 'react';

import record1 from "../images/banner/nattywickedwhite.png"
import record2 from "../images/banner/pathoftherighteousnessdubwhite.png"
import record3 from "../images/banner/vixonsoundleftbehindwhite.png"

const BannerComponent = () => {
    return (
        // <div className="h-52 flex justify-center group bg-main-yellow bg-opacity-95">                
        <div className="h-52 lg:w-2/4 flex justify-center group bg-gradient-to-b from-main-yellow to-main-green bg-opacity-95 mt-56 lg:ml-24 border-2 border-main-black overflow-hidden lg:mt-0 lg:rounded-3xl">                
            <img className="hover:animate-spin-slow" src={record1} alt="record 1"/>
            <img className="group-hover:animate-spin-slow" src={record2} alt="record 2"/>
            <img className="hover:animate-spin-slow" src={record3} alt="record 3"/>
        </div>
    );
}

export default BannerComponent;
