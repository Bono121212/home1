import React, { Component } from "react";
import { Button, Image, Icon } from "semantic-ui-react";

//import CommentImg04 from "../../../../../images/all/profile-80-02.png";
import left01 from "../../../../../images/all/thumbnail-sample-01.png";
import manager from "../../../../../images/all/icon-community-manager02.png";

import lock from "../../../../../images/all/icon-card-lock.png";
import likeoff from "../../../../../images/all/icon-favorite-off-18-px.svg";
import likeon from "../../../../../images/all/icon-favorite-on-18-px.svg";
//import cardThumb1 from "../../../../../images/all/thumbnail-sample-03.png";

class OpenCard03 extends Component {
    render() {
        return (
            <div className="community-open-card coc_v2">  { /* coc_v2 클래스 추가되었습니다. */}
                <div className="open-card-top">
                    <span className="label">리더십</span>
                    <div className="iconbox">
                        {/* 가입대기 보이기 : waiton 클래스, 가입대기 숨기기 : waitoff 클래스 */}
                        <span className="waitoff">가입대기</span>

                        {/* 비공개 커뮤니티 보이기 : lockon 클래스, 비공개 커뮤니티 숨기기 : lockoff 클래스 */}
                        <span className="lockon"><Icon><Image src={lock} alt="비공개"/></Icon></span>

                        {/* 
                            .favorites_btn > Button 태그의 'on' 클래스 여부에 따라서 즐겨찾기 이미지 변경됩니다 작업시 참고 부탁드립니다
                            즐겨찾기 보이기 : on 클래스 추가
                            즐겨찾기 숨기기 : on 클래스 제거
                        */}
                        <div className="favorites_btn">
                            <Button className="">
                                <Icon className="favoff"><Image src={likeoff} alt="즐겨찾기 제거"/></Icon>
                                <Icon className="favon"><Image src={likeon} alt="즐겨찾기 추가"/></Icon>
                            </Button>
                        </div>
                    </div>
                </div>
                <a href={()=>false} className="open-card-content">
                    <p>데이터 혁신이 답이다</p>
                    <div className="thumbnail">
                        <img src={left01} alt="" />
                    </div>
                    <div className="community-main-left-list">
                        <div className="community-main-left-h3">
                        본격적인 데이터 분석 학습에 앞서 데이터의 중요성 및 데이터 기반
                            비즈니스 혁신 사례에 대해 가나다라 마바사아자차 카타 파 하 가나 다라마바 사아자 차카타 파하 
                        </div>
                    </div>
                </a>
                <div className="open-card-bottom">
                    <div className="title-area">
                        <div class="text-list">
                            <img src={manager} alt="" />
                            <span>캠핑마스터</span>
                        </div>  
                    </div>
                    <div className="right-area">
                        <span>멤버</span>
                        <span>99,999</span>
                    </div>
                </div>
            </div>
        );  
    }
}

export default OpenCard03;
