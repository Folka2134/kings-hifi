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

            <div className="h-52 flex justify-center group bg-gradient-to-b from-main-yellow to-main-green bg-opacity-95 border-2 border-main-black overflow-hidden lg:mt-0 lg:rounded-3xl">                
                <img className="hover:animate-spin-slow" src={record1} alt="record 1"/>
                <img className="group-hover:animate-spin-slow" src={record2} alt="record 2"/>
                <img className="hover:animate-spin-slow" src={record3} alt="record 3"/>
            </div>
      
    );
}

export default BannerComponent;
