import React, { Component } from "react";
import {Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

import FavoritesBtnOn from "../FavoritesBtnOn";
// import FavoritesBtnOff from "../FavoritesBtnOff";

import thumbnail from "../../../../../images/all/thumbnail-sample-03.png";
import manager from "../../../../../images/all/icon-community-manager02.png";

class CommunityMainLeftCard03 extends Component {
    render() {
        return (
        <>
            <div className="community-main-left-contents">
                <div className="thumbnail">
                    <Image src={thumbnail} />
                </div>
                <Link t="/" className="community-main-left-list">
                    <div className="community-main-left-h3">반도체 4차산업 OLED 제약의료바이오 자동화장비설계<span class="count">+N</span></div>
                    <div className="community-main-left-span">
                        <span>
                            <Image src={manager} alt="관리자"/>
                            EBBLE
                        </span>
                        멤버<span>10,795</span>
                    </div>
                </Link>

                {/* 즐겨찾기 버튼 */}
                <FavoritesBtnOn />

            </div>
        </>
        );
    }
}

export default CommunityMainLeftCard03;
