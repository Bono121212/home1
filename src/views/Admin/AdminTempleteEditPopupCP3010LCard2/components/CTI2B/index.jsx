import React, { Component } from "react";
import { Link } from "react-router-dom";

class CTI2B extends Component {

    render() {
        return (
            <div className="compo_txt_img compo2">
                <Link to="/">
                    <div className="compo_thumb">
                        {/* 이미지파일이 들어가는 영역입니다.
                        <Image src={thumb1} alt="슬라이드이미지"/> */}
                    </div>
                    <div className="compo_info">
                        <strong className="title ellipsis2">게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타...</strong>
                        <p className="txt ellipsis2">게시글의 상세내용이 두 줄까지 보입니다. 게시글의 상세내용이 두 줄까지 보입니다. 게시글의 상세내용이 두 줄까지 보입니다. 게시글의 상세내용이 두 줄까지 보입니다</p>
                    </div>
                </Link>
            </div>

        );
    }
}

export default CTI2B;
