import React, { Component } from "react";
import {Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

import FavoritesBtnOn from "../FavoritesBtnOn";
// import FavoritesBtnOff from "../FavoritesBtnOff";

import thumbnail from "../../../../../images/all/thumbnail-sample-02.png";
import manager from "../../../../../images/all/icon-community-manager02.png";


class CommunityMainLeftCard02 extends Component {
    render() {
        return (
        <>
            <div className="community-main-left-contents">
                <div className="thumbnail">
                    <Image src={thumbnail} />
                </div>
                <Link to="/" className="community-main-left-list">
                    <div className="community-main-left-h3">자동차의 핵심은 인공지능</div>
                    <div className="community-main-left-span">
                        <span>
                            <Image src={manager} alt="관리자" />
                            Chang
                        </span>
                        멤버<span>8,120</span>
                    </div>
                </Link>

                {/* 즐겨찾기 버튼 */}
                <FavoritesBtnOn />

            </div>
        </>
        );
    }
}

export default CommunityMainLeftCard02;
