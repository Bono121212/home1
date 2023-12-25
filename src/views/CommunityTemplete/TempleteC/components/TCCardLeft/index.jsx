import React, { Component } from "react";
import { Image } from "semantic-ui-react";

import thumb1 from "../../../../../images/all/matter01.png"

class TCCardLeft extends Component {

    render() {
        return (
            <div className="compo_txt_img left">
                <div className="compo_thumb">
                    <Image src={thumb1} alt="컨텐츠 이미지"/>
                </div>
                <div className="compo_info">
                    <strong className="title ellipsis2">앞차와 간격 ‘척척’, 거뜬한 주행 탑승객 “미래도시에 와 있는 기분”</strong>
                    <p className="txt ellipsis2">모빌아이 창업자 사수아 CEO와 뉴욕타임즈 컬럼니스트 존 도의 대담.</p>
                </div>
            </div>
        );
    }
}

export default TCCardLeft;
