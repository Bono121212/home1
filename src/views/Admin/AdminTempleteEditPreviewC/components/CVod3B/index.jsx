import React, { Component } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import sample from "../../../../../images/all/sample-test.png"
import Writer from "../../../../../images/all/sample-test3.png"

class CVod3B extends Component {

    render() {
        return (
            <div className="compo_vod compo3">
                <Link to="/">
                    <div className="compo_thumb">
                        <Image src={sample} alt="컨텐츠이미지" />
                        <Icon className="vod_play"/>
                    </div>
                    <div className="compo_info">
                        <div className="info_top">
                            <span className="writer">
                                <Image src={Writer} alt="글쓴이이미지" />
                                <span className="ellipsis">김글쓴이작성자김글쓴이작성자</span>
                            </span>
                            <span className="date">2021.05.10</span>
                        </div>
                        <p className="info_body ellipsis2">
                        프로축구 K리그, NBA 탑샷(Top Shot)을 노리다
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
