import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import sample from "../../../../../images/all/sample-test.png"


class CTI2B extends Component {

    render() {
        return (
            <div className="compo_txt_img compo2">
                <Link to="/">
                    <div className="compo_thumb">
                        <Image src={sample} alt="슬라이드이미지"/>
                    </div>
                    <div className="compo_info">
                    <strong className="title ellipsis2">덴마크, 북해 해상풍력 에너지섬 건설한다.</strong>
                        <p className="txt ellipsis2">덴마크가 지난 4일 덴마크 서해안에서 80km 떨어진 북해 해상에 인공섬의 준공식을 진행했다 덴마크가 지난 4일 덴마크 서해안에서 80km 떨어진 북해 해상에 인공섬의 준공식을 진행했다</p>
                    </div>
                </Link>
            </div>

        );
    }
}

export default CTI2B;
