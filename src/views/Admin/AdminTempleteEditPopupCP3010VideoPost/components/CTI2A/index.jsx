import React, { Component } from "react";
import { Link } from "react-router-dom";

//import thumb1 from "../../../../../images/all/matter01.png"

class CTI2A extends Component {

    render() {
        return (
            <div className="compo_txt_img compo2">
                <Link to="/">
                    <div className="compo_thumb">
                        {/* 이미지파일이 들어가는 영역입니다.
                        <Image src={thumb1} alt="슬라이드이미지"/> */}
                    </div>
                    <div className="compo_info">
                        <strong className="title ellipsis2">중 GMW, 수소에너지 전략발표 중 GMW, 수소에너지 전략발표 중 GMW, 수소에너지 전략발표</strong>
                        <p className="txt ellipsis2">중국의 자동차 제조사인 GMW가 지난4월 29일 바오딩의 하발기술센터에서 전략기획회의를 중국의 자동차 제조사인 GMW가 지난4월 29일 바오딩의 하발기술센터에서 전략기획회의를</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTI2A;
