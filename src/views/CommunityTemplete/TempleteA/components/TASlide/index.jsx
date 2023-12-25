import React, { Component } from "react";
import {Image, Button } from "semantic-ui-react";

import slide from "../../../../../images/all/a-sample.png";
class TASlide extends Component {

    render() {
        return (
            <>
               <div className="t_slide_area">
                    <div className="opacity">
                        <div className="inner">
                            <div className="t_slide">
                                <div className="slide">
                                    <Image src={slide} alt="슬라이드이미지"/>

                                    {/* 슬라이드 텍스트는 top/middle/bottom 클래스에 따라서 위치 변경됩니다*/}
                                    {/* 슬라이드 텍스트는 left/center/right 클래스에 따라서 위치 변경됩니다*/}
                                    <p className="slide_txt middle center">슬라이드 타이틀입니다</p>
                                </div>
                                <div className="slide">
                                    <Image src={slide} alt="슬라이드이미지"/>
                                    <p className="slide_txt middle center">슬라이드 타이틀입니다</p>
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
            </>
        );
    }
}

export default TASlide;

