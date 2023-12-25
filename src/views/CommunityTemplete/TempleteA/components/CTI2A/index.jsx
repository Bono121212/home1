import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb1 from "../../../../../images/all/bg-thumbnail.png"


class CTI2A extends Component {

    render() {
        return (
            <div className="compo_txt_img compo2">
                <Link to="/">
                    <div className="compo_thumb">
                        <Image src={thumb1} alt="컨텐츠이미지"/>
                    </div>
                    <div className="compo_info">
                        {/* <strong className="title ellipsis2">환경 보호하는 브랜드들의 참여가 늘었네요! 참여도가 높은 상위 20개의 브랜드를 주목해주세요.</strong>  */}

                        {/* 변경내역 */}
                        {/*  
                            <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                            <span className="ellipsis2">
                        */}
                        <strong className="title new">
                            <span className="ellipsis2">환경 보호하는 브랜드들의 참여가 늘었네요! 참여도가 높은 상위 20개의 브랜드를 주목해주세요.환경 보호하는 브랜드들의 참여가 늘었네요! 참여도가 높은 상위 20개의 브랜드를 주목해주세</span>
                        </strong>
                        <p className="txt ellipsis2">편의점에 가보면 재활용이 어려운 용기들이 많이 보이는데요, 요새는 브랜드들이 앞다투어 환경 보호 정책을 공표하여 기업 이미지를 향상시키편의점에 가보면 재활용이 어려운 용기들이 많이 보이는데요, 요새는 브랜드들이 앞다투어 환경 보호 정책을 공표하여 기업 이미지를 향상시키</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTI2A;

