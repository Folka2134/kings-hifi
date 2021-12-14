import React from 'react';

import record1 from "../images/banner/nattywickedwhite.png"
import record2 from "../images/banner/pathoftherighteousnessdubwhite.png"
import record3 from "../images/banner/vixonsoundleftbehindwhite.png"

const BannerComponent = () => {
    return (
        <div className="h-52 flex justify-center bg-main-yellow border-0 border-black bg-opacity-95">                
            <img className="hover:animate-spin" src={record1} alt="record 1"/>
            <img className="hover:animate-spin" src={record2} alt="record 2"/>
            <img className="hover:animate-spin" src={record3} alt="record 3"/>
        </div>
    );
}

export default BannerComponent;
