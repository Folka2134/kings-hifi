import React from 'react';

import record1 from "../images/banner/nattywickedwhite.png"
import record2 from "../images/banner/pathoftherighteousnessdubwhite.png"
import record3 from "../images/banner/vixonsoundleftbehindwhite.png"
import record4 from "../images/banner/kingshifi-nolove.jpg"
import record5 from "../images/banner/kingshifi-pulla.jpg"
import record6 from "../images/banner/kingshifi-tempo.jpg"

import banner from "../images/banner2.jpg"


const BannerComponent = () => {
    return (
        // <div className="h-52 flex justify-center group bg-main-yellow bg-opacity-95">         

        <div className="h-40 w-full flex justify-center group bg-gradient-to-b from-main-yellow to-main-green bg-opacity-95 border-2 border-main-black overflow-hidden md:rounded-3xl z-0 lg:h-52 lg:w-[45rem] lg:absolute lg:left-[10%] lg:mt-0">
            <img src={record1} alt="record 1" />
            <img src={record2} alt="record 2" />
            <img src={record3} alt="record 3" />
        </div>

    );
}

export default BannerComponent;
