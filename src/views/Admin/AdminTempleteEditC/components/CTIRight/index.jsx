import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import sample from "../../../../../images/all/sample-test.png"


class CTILRLeft extends Component {

    render() {
        return (
            <div className="compo_txt_img_right compo1">
                <Link to="/" className="flex">
                    <div className="compo_info left">
                        <strong className="title vcenter ellipsis2">앞차와 간격 ‘척척’, 거뜬한 주행 탑승객 “미래도시에 와 있는 기분”</strong>
                        <p className="txt vcenter ellipsis2">모빌아이 창업자 사수아 CEO와 뉴욕타임즈 컬럼니스트 존 도의 대담.</p>
                    </div>
                    <div className="compo_thumb right">
                        <Image src={sample} alt="슬라이드이미지"/>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTILRLeft;
