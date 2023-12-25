import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb1 from "../../../../../images/all/matter02.png"


class CTI3B extends Component {

    render() {
        return (
            <div className="compo_txt_img compo3">
                <Link to="">
                    <div className="compo_thumb">
                        <Image src={thumb1} alt="컨텐츠이미지"/>
                    </div>
                    <div className="compo_info">
                        {/* <strong className="title ellipsis2">덴마크, 북해 해상풍력 에너지섬 건설한다.</strong> */}

                        {/* 변경내역 */}
                        {/*  
                            <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                            <span className="ellipsis2">
                        */}
                        <strong className="title new">
                            <span className="ellipsis2">덴마크, 북해 해상풍력 에너지섬 건설한다.</span>
                        </strong>
                        <p className="txt ellipsis2">안녕하세요! : ) 오랜만에 인사드립니다. 저희 3조는 점심시간을 활용하여 카페 다녀왔습니다. 오오오오오오오오오오</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTI3B;
