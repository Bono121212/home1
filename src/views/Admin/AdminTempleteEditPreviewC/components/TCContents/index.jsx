import React, { Component } from "react";

//import Banner from "../../../../../images/all/promotion-1200-x-240.jpg";
//import thumb1 from "../../../../../images/all/matter01.png"

//import TCCardLeft from '../TCCardLeft';
//import TitleLink from '../TitleLink';
import TitleNoLink from '../TitleNoLink';
import CVod4A from '../CVod4A';
import CVod4B from '../CVod4B';
import CTILeft3A from '../CTILeft3A';
import CTILeft3B from '../CTILeft3B';
//import CImg1 from '../CImg1';
import CImg2 from '../CImg2';
//import CImg3 from '../CImg3';
//import CImg4 from '../CImg4';

class TCContents extends Component {

    render() {
        return (
            <div className="tc_contents">

                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="mg14 flex">
                            <CVod4A />
                            <CVod4B />
                            <CVod4A />
                            <CVod4B />
                        </div> 
                    </div> 
                </div>
                
                <div className="card_area">
                    <div className="opacity">
                        <div className="t_img_area">
                            <TitleNoLink />
                            <div className="mg14 flex">
                                {/* <CImg1 /> */}

                                <CImg2 />
                                <CImg2 />

                                {/* <CImg3 />
                                <CImg3 />
                                <CImg3 /> */}
                                {/* 
                                <CImg4 />
                                <CImg4 />
                                <CImg4 />
                                <CImg4 /> */}
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="mg14 flex">
                            <CTILeft3A/>
                            <CTILeft3B/>
                            <CTILeft3A/>
                            <CTILeft3B/>
                            <CTILeft3A/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TCContents;
