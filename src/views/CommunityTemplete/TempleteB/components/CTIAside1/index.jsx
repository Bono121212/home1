import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb1 from "../../../../../images/all/matter01.png"

class CTIAside1 extends Component {

    render() {
        return (
            <div className="compo_txt_img aside compo1">
                <Link to="/">
                    <div className="compo_thumb">
                        <Image src={thumb1}  alt="컨텐츠 이미지"/>
                    </div>
                    <div className="compo_info">
                        {/* <strong className="title ellipsis2">일론 머스크, 버니 샌더스의 막대한 富 비판</strong> */}

                        {/* 변경내역 */}
                        {/*  
                            <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                            <span className="ellipsis2">
                        */}
                        <strong className="title new">
                            <span className="ellipsis2">일론 머스크</span>
                        </strong>
                        <p className="txt ellipsis2">테슬라의 최고 경영자(CEO) 일론 머스크는 버니 샌더스 미국 상원 예산위원장 테슬라의 최고 경영자(CEO) 일론 머스크는</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTIAside1;
