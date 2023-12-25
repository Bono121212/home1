import React, { Component } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb1 from "../../../../../images/all/matter01.png"
import Writer from "../../../../../images/all/profile-110-px-sample-4.png"

class CTxtCard3A extends Component {

    render() {
        return (
            <div className="compo_txt_card compo3">
                <Link to="/">
                    <div className="compo_info">
                        <strong className="title ellipsis2">[공지] 3rd Letter : 2주 동안의 진행된 써니 교육에 대한 이벤트 공지입니다</strong>
                        <p className="txt ellipsis2">게시글의 상세내용이 두 줄까지 보입니다. 게시글의 상세내용이 두 줄까지 보입니다. 게시글은요 말이죠</p>
                    </div>
                    <div className="info_top">
                        <span className="writer">
                            <Icon>
                                <Image src={Writer} alt="글쓴이이미지" /> 
                            </Icon>
                            <span className="ellipsis">김글쓴이작성자김글쓴이작성자</span>
                        </span>
                        <span className="date">2021.05.10</span>
                    </div>
                    <div className="info_bottom">
                        <span className="cnt">1,578</span>
                        <span className="like">1,004</span>
                        <span className="reply">100</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTxtCard3A;
