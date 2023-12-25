import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import sample from "../../../../../images/all/sample-test.png"

class CTIAside1 extends Component {

    render() {
        return (
            <div className="compo_txt_img aside compo1">
                <Link to="/">
                    <div className="compo_thumb">
                        <Image src={sample} alt="슬라이드이미지"/>
                    </div>
                    <div className="compo_info">
                        <strong className="title ellipsis2">일론 머스크, 버니 샌더스의 막대한 富 비판</strong>
                        <p className="txt ellipsis2">테슬라의 최고 경영자(CEO) 일론 머스크는 버니 샌더스 미국 상원 예산위원장 테슬라의 최고 경영자(CEO) 일론 머스크는</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTIAside1;
