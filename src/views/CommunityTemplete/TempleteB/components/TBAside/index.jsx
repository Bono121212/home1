import React, { Component } from "react";

//import thumb1 from "../../../../../images/all/matter01.png"

//import CTIAside1 from "../CTIAside1";
import CTIAside2A from "../CTIAside2A";
import CTIAside2B from "../CTIAside2B";
import CTILeftAside from "../CTILeftAside";
import TitleNoLink from "../TitleNoLink";


class TBAside extends Component {

    render() {
        return (
            <div className="tb_aside">

                <div className="tb_aside_box">
                    <div className="opacity">
                        <TitleNoLink />
                        {/* 가로 2xn */}
                        <div className="mg7 flex">
                            <CTIAside2A />
                            <CTIAside2B />
                            <CTIAside2B />
                            <CTIAside2A />
                        </div>

                        {/* 가로 1xn */}
                        {/* <div className="mg7">
                            <CTIAside1 />
                        </div> */}
                    </div>
                </div>

                <div className="tb_aside_box borderT pdt16">
                    <div className="opacity">
                        <div className="mg7">
                            <CTILeftAside /> 
                            <CTILeftAside /> 
                            <CTILeftAside /> 
                            <CTILeftAside /> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TBAside;
