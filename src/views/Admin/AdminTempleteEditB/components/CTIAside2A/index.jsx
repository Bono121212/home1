import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import sample from "../../../../../images/all/sample-test.png"

class CTIAside2A extends Component {

    render() {
        return (
            <div className="compo_txt_img aside compo2">
                <Link to="/">
                    <div className="compo_thumb">
                        <Image src={sample} alt="슬라이드이미지"/> 
                    </div>
                    <div className="compo_info">
                        <strong className="title ellipsis2">4조원 가치 ‘로</strong>
                        <p className="txt ellipsis2">사용자가 게임을 프로그래밍하고 사용자가 게임을 프로그래밍하</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTIAside2A;

