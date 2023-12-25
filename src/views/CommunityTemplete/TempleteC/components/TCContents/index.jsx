import React, { Component } from "react";

//import Banner from "../../../../../images/all/promotion-1200-x-240.jpg";
//import thumb1 from "../../../../../images/all/matter01.png"

//import TCCardLeft from '../TCCardLeft';
import TitleLink from '../TitleLink';
import TitleNoLink from '../TitleNoLink';
//import CVod2A from '../CVod2A';
//import CVod2B from '../CVod2B';
//import CVod3A from '../CVod3A';
//import CVod3B from '../CVod3B';
import CVod4A from '../CVod4A';
import CVod4B from '../CVod4B';
//import CTILeft2A from '../CTILeft2A';
import CTILeft3A from '../CTILeft3A';
import CTILeft3B from '../CTILeft3B';
//import CTILeft4A from '../CTILeft4A';
//import CImg1 from '../CImg1';
import CImg2 from '../CImg2';
import CImg2B from '../CImg2B';
import CImg3 from '../CImg3';
import CImg3B from '../CImg3B';
import CImg4 from '../CImg4';
import CImg4B from '../CImg4B';
import CardBelt from '../CardBelt';

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
                
                {/* <div className="opacity">
                    <TitleLink />
                    <div className="mg14 flex">
                        <CVod3A />
                        <CVod3B />
                        <CVod3A />
                    </div> 
                </div> */}
                        
                {/* <div className="opacity">
                    <div className="mg14 flex">
                        <CVod2A />
                        <CVod2B />
                    </div>  
                </div> */}

                {/* 2정렬 */}
                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="mg14 flex">
                            <CImg2 />
                            <CImg2B />
                        </div>
                    </div>
                </div>

                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="mg14 flex">
                            <CImg3 />
                            <CImg3B />
                            <CImg3 />
                        </div>
                    </div>
                </div>

                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="mg14 flex">
                            <CImg4 />
                            <CImg4B />
                            <CImg4 />
                            <CImg4B />
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

                {/* <div className="opacity">
                    <TitleNoLink />
                    <div className="mg14 flex">
                        <CTILeft2A/>
                        <CTILeft2A/>
                        <CTILeft2A/>
                        <CTILeft2A/>
                    </div>
                </div> */}

                {/* <div className="opacity">
                    <TitleLink />
                    <div className="mg14 flex">
                        <CTILeft4A/>
                        <CTILeft4A/>
                        <CTILeft4A/>
                        <CTILeft4A/>
                    </div>
                </div> */}



                {/* 학습카드 */}
                <div className="card_area">
                    <div className="opacity">
                        <TitleLink />  
                        <div className="flex">
                            <CardBelt/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TCContents;
