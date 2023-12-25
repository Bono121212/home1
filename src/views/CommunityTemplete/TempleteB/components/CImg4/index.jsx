import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Banner from "../../../../../images/all/promotion-1200-x-240.jpg";

class CImg4 extends Component {

    render() {
        return (
            <div className="compo_img compo4">
                <Link to="">
                    <div className="compo_thumb">
                        <Image src={Banner} />
                        {/* 슬라이드 텍스트는 top/middle/bottom 클래스에 따라서 위치 변경됩니다*/}
                        {/* 슬라이드 텍스트는 left/center/right 클래스에 따라서 위치 변경됩니다*/}      
                        <p className="grid_txt top left">상좌에위치하는 타이틀</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CImg4;
