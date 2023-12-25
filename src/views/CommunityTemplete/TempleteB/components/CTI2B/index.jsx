import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb1 from "../../../../../images/all/matter02.png"


class CTI2B extends Component {

    render() {
        return (
            <div className="compo_txt_img compo2">
                <Link to="/">
                    <div className="compo_thumb">
                        <Image src={thumb1} alt="컨텐츠이미지"/>
                    </div>
                    <div className="compo_info">
                        {/* <strong className="title ellipsis2">생분해 플라스틱을 아시나요?</strong> */}

                        {/* 변경내역 */}
                        {/*  
                            <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                            <span className="ellipsis2">
                        */}
                        <strong className="title new">
                            <span className="ellipsis2">생분해 플라스틱을 아시나요?</span>
                        </strong>
                        <p className="txt ellipsis2">코로나 상황으로 플라스틱 환경 문제가 심해지고 있는데요, 새로운 문제 해결을 위한 플라스틱 제품군이 나와 화제가 되고 있습니다. 코로나 상황으로 플라스틱 환경 문제가 심해지고 있는데요, 새로운 문제 해결을 위한 플라스틱 제품군이 나와 화제가 되고 있습니다. </p>
                    </div>
                </Link>
            </div>

        );
    }
}

export default CTI2B;
