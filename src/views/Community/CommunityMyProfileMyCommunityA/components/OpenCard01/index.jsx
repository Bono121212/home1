import React, { Component, createRef } from "react";
import CommentImg04 from "../../../../../images/all/profile-80-02.png";
import left01 from "../../../../../images/all/thumbnail-sample-01.png";

class JoinedStateCard extends Component {
  render() {
    return (
      <div className="community-open-card">
        <div className="open-card-top">
          <span className="label">리더십</span>
          <span className="wait">가입대기</span>
        </div>
        <div className="open-card-content">
          <p>데이터 혁신이 답이다</p>
          <div className="thumbnail">
            <img src={left01} alt="" />
          </div>
          <div className="community-main-left-list">
            <div className="community-main-left-h3">
              본격적인 데이터 분석 학습에 앞서 데이터의 중요성 및 데이터 기반
              비즈니스 혁신 사례에 대해…
            </div>
          </div>
        </div>
        <div className="open-card-bottom">
          <div className="title-area">
            <div class="text-list">
              <img src={CommentImg04} alt="" />
              <span>nickname</span>
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

export default JoinedStateCard;
