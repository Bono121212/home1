import React, { Component } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb1 from "../../../../../images/all/matter02.png"
import Writer from "../../../../../images/all/profile-110-px-sample-4.png"

class CVod3B extends Component {

    render() {
        return (
            <div className="compo_vod compo3">
                <Link to="/">
                    <div className="compo_thumb">
                        <Image src={thumb1} alt="컨텐츠이미지" />
                        <span className="icon_wrap">
                            <Icon className="th_play"/>
                            {/* <Icon className="th_file"/>
                            <Icon className="th_lock"/> */}
                        </span>
                    </div>
                    <div className="compo_info">
                        <div className="info_top">
                            <span className="writer">
                                <Image src={Writer} alt="글쓴이이미지" />
                                <span className="ellipsis">김글쓴이작성자김글쓴이작성자</span>
                            </span>
                            <span className="date">2021.05.10</span>
                        </div>

                        {/* 변경내역 */}
                        {/* 
                            before : <p className="info_body ellipsis2 important new">게시글 제목</p>
                            after : <p className="info_body ellipsis2 important"> 
                                        <Icon className="i_important"/> ** 추가
                                        <strong className="new">게시글 제목</strong> ** new 추가 
                                    </p> */}

                        <p className="info_body ellipsis2">
                            <Icon className="i_important"/>
                            <strong className="new">프로축구 K리그!</strong>
                        </p>
                        <div className="info_bottom">
                            <span className="cnt">1,578</span>
                            <span className="like">1,004</span>
                            <span className="reply">100</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CVod3B;
