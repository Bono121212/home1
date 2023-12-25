import React, { Component } from "react";
import {Image, Button, Icon } from "semantic-ui-react";
import {Link} from "react-router-dom";

import CommentImg04 from "../../../../../images/all/profile-80-02.png";
import left01 from "../../../../../images/all/thumbnail-sample-01.png";
import manager from "../../../../../images/all/icon-community-manager02.png";

import lock from "../../../../../images/all/icon-card-lock.png";
import likeoff from "../../../../../images/all/icon-favorite-off-18-px.svg";
import likeon from "../../../../../images/all/icon-favorite-on-18-px.svg";
import cardThumb1 from "../../../../../images/all/thumbnail-sample-03.png";

class OpenCardLikeOn extends Component {
    render() {
        return (
            <div className="community_open_card">
                <div className="card_inner">
                    <div className="card_header">
                        <span className="label">리더십</span>
                        <div className="iconbox">
                            {/* 가입대기 보이기 : waiton 클래스, 가입대기 숨기기 : waitoff 클래스 */}
                            <Link to="/" className="waitoff">가입대기</Link>

                            {/* 비공개 커뮤니티 보이기 : lockon 클래스, 비공개 커뮤니티 숨기기 : lockoff 클래스 */}
                            <span className="lockon"><Icon><Image src={lock} alt="비공개"/></Icon></span>

                            {/* 
                                .favorites_btn > Button 태그의 'on' 클래스 여부에 따라서 즐겨찾기 이미지 변경됩니다 작업시 참고 부탁드립니다
                                즐겨찾기 보이기 : on 클래스 추가
                                즐겨찾기 숨기기 : on 클래스 제거
                            */}
                            <div className="favorites_btn">
                                <Button className="on">
                                    <Icon className="favoff"><Image src={likeoff} alt="즐겨찾기 제거"/></Icon>
                                    <Icon className="favon"><Image src={likeon} alt="즐겨찾기 추가"/></Icon>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="card_body">
                        <strong className="card_title">데이터 혁신이 답이다 데이터 혁신이 답이다 데이터 혁신이 답이다 데이터 혁신이 답이다 데이터 혁신이 답이다</strong>
                        <div className="card_contents">
                            <span className="card_thumb"><Image src={cardThumb1} /></span>
                            <p className="card_txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ullam quibusdam veniam? Minus dignissimos odio excepturi vero quae ducimus exercitationem accusantium inventore!</p>
                        </div>
                    </Link>
                    <div className="card_bottom">
                        <div className="manager"><Icon><Image src={manager} alt="커뮤니티관리자"/></Icon> nickname</div>
                        <div className="member">멤버<span>99,999</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OpenCardLikeOn;