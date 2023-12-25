import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb1 from "../../../../../images/all/matter02.png"


class CTI4D extends Component {

    render() {
        return (
            <div className="compo_txt_img compo4">
                <Link to="">
                    <div className="compo_thumb">
                        <Image src={thumb1} alt="컨텐츠이미지"/>
                    </div>
                    <div className="compo_info">
                        {/* <strong className="title ellipsis2">중 GMW, 수소에너지 전략발표 중 GMW, 수소에너지 전략발표 중 GMW, 수소에너지 전략발표</strong> */}

                        {/* 변경내역 */}
                        {/*  
                            <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                            <span className="ellipsis2">
                        */}
                        <strong className="title">
                            <span className="ellipsis2">중 GMW, 수소에너지 전략발표 중 GMW, 수소에너지 전략발표 중 GMW, 수소에너지 전략발표.</span>
                        </strong>
                        <p className="txt ellipsis2">중국의 자동차 제조사인 GMW가 지난4월 29일 바오딩의 하발기술센터에서 전략기획회의를 중국의 자동차 제조사인 GMW가 지난4월 29일 바오딩의 하발기술센터에서 전략기획회의를</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTI4D;
