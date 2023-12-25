import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb2 from "../../../../../images/all/matter02.png"

class CTIAside2B extends Component {

    render() {
        return (
            <div className="compo_txt_img aside compo2">
               <div className="opacity">
                    <Link to="/">
                        <div className="compo_thumb">
                            <Image src={thumb2}  alt="컨텐츠 이미지"/>
                        </div>
                        <div className="compo_info">
                            {/* <strong className="title ellipsis2">4조원 가치 ‘로블록스’ 게임 만들고 4조원 가치 ‘로블록스’ 게임 만들</strong> */}

                            {/* 변경내역 */}
                            {/*  
                                <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                                <span className="ellipsis2">
                            */}
                            <strong className="title">
                                <span className="ellipsis2">4조원 가치 ‘로블록스’ 게임 만들고 4조원 가치 ‘로블록스’ 게임 만들</span>
                            </strong>
                            <p className="txt ellipsis2">사용자가 게임을 프로그래밍하고 사용자가 게임을 프로그래밍하</p>
                        </div>
                    </Link>
               </div>
            </div>
        );
    }
}

export default CTIAside2B;

