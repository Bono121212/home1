import React, { Component } from "react";
import {Image, Button } from "semantic-ui-react";

import thumb1 from "../../../../../images/all/a-sample-gray.png";

class TCSlide extends Component {

    render() {
        return (
            <div className="t_slide_area type01">
                <div className="opacity">
                    <div className="inner">
                        <div className="t_slide">
                            <div className="slide">
                                {/* 이미지파일이 들어가는 영역입니다.*/}
                                <Image src={thumb1} alt="슬라이드이미지"/> 
                            </div>
                            <div className="slide">
                                {/* 이미지파일이 들어가는 영역입니다. */}
                                <Image src={thumb1} alt="슬라이드이미지"/>
                            </div>
                        </div>

                        <div className="t_control">
                            <Button className="prev"></Button>
                            <Button className="next"></Button>
                        </div>
                        <div className="t_pager">
                            <Button className="dot active"></Button>
                            <Button className="dot"></Button>
                            <Button className="dot"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TCSlide;