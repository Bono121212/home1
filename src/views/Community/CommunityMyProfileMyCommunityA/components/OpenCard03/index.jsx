import React, { Component, createRef } from "react";
import CommentImg04 from "../../../../../images/all/profile-80-03.png";
import left01 from "../../../../../images/all/thumbnail-sample-03.png";

class JoinedStateCard extends Component {
  render() {
    return (
      <div className="community-open-card">
        <div className="open-card-top">
          <span className="label">에너지 솔루션</span>
        </div>
        <div className="open-card-content">
          <p>반도체 4차산업 OLED 제약의료바이오 자동화장비설계의 모든 것</p>
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
              <span>mini8034</span>
            </div>
          </div>
          <div className="right-area">
            <span>멤버</span>
            <span>257</span>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinedStateCard;
