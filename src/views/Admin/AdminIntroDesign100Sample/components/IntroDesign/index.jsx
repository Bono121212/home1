import React, { Component } from "react";

import CTxtCard4A from "../CTxtCard4A";
import CTxtCard4B from "../CTxtCard4B";
import CTxtCard3A from "../CTxtCard3A";
import CTxtCard3B from "../CTxtCard3B";
import CTxtCard2A from "../CTxtCard2A";
import CTxtCard2B from "../CTxtCard2B";
import CTxtList1A from "../CTxtList1A";
import CTxtList1B from "../CTxtList1B";

import TitleNoLink from "../TitleNoLink";
//import TitleLink from "../TitleLink";
import CImg1 from "../CImg1";



class IntroDesign extends Component {
    render() {
        return (
            <div className="intro_design100">
                <div className="opacity">
                    <div className="mg14">
                        <CImg1 />
                    </div>
                </div>
                
                <div className="opacity">
                    <TitleNoLink />
                    <div className="mg14 flex">
                        <CTxtCard4A />
                        <CTxtCard4B />
                        <CTxtCard4A />
                        <CTxtCard4B />
                        <CTxtCard4B />
                        <CTxtCard4A />
                        <CTxtCard4B />
                        <CTxtCard4A />
                    </div> 
                </div> 

                <div className="opacity">
                    <TitleNoLink />
                    <div className="mg14 flex">
                        <CTxtCard3A />
                        <CTxtCard3B />
                        <CTxtCard3A />
                        <CTxtCard3B />
                        <CTxtCard3A />
                        <CTxtCard3B />
                    </div> 
                </div> 

                <div className="opacity">
                    <TitleNoLink />
                    <div className="mg14 flex">
                        <CTxtCard2A />
                        <CTxtCard2B />
                        <CTxtCard2A />
                        <CTxtCard2B />
                    </div> 
                </div> 

                <div className="opacity">
                    <TitleNoLink />
                    <div className="mg14 flex">
                        <CTxtList1A />
                        <CTxtList1B />
                    </div> 
                </div> 
            </div>
        );
    }
}

export default IntroDesign;
