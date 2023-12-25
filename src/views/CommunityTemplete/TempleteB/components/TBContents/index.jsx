import React, { Component } from "react";

import CTILeft from '../CTILeft';
import CTIRight from '../CTIRight';
import TitleLink from '../TitleLink';
import TitleNoLink from '../TitleNoLink';
import CImg2 from '../CImg2';
import CImg2B from '../CImg2B';
import CImg3 from '../CImg3';
import CImg3B from '../CImg3B';
import CImg4 from '../CImg4';
import CImg4B from '../CImg4B';
import CTI2B from '../CTI2B';
import CTI3A from '../CTI3A';
import CTI3B from '../CTI3B';
import TBSlide from '../TBSlide';
import CardBelt from '../CardBelt';



class TBContents extends Component {

    render() {
        return (
            <div className="tb_contents">

                <TBSlide/>
                
                <div className="card_area">
                    <div className="opacity">
                        <TitleLink />
                        <div className="flex mg14">
                            <CTILeft/>
                            <CTIRight/>
                        </div>
                    </div>
                </div>

                {/* 학습카드 */}
                <div className="card_area">
                    <div className="opacity">
                        <TitleLink />  
                        <div className="flex">
                            <CardBelt/>
                        </div>
                    </div>
                </div>

                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="flex mg14">
                            <CTI3A/>
                            <CTI3B/>
                        </div>
                    </div>
                </div>

                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="flex mg14">
                            <CTI2B/>
                            <CTI2B/>
                        </div>
                    </div>
                </div>

                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="flex mg14">
                            <CImg2/>
                            <CImg2B/>
                        </div>
                    </div>
                </div>

                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="flex mg14">
                            <CImg3/>
                            <CImg3B/>
                            <CImg3/>
                        </div>
                    </div>
                </div>
                <div className="card_area">
                    <div className="opacity">
                        <TitleNoLink />
                        <div className="flex mg14">
                            <CImg4/>
                            <CImg4B/>
                            <CImg4/>
                            <CImg4B/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TBContents;
