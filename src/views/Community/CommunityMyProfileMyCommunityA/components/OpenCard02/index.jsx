import React, { Component, createRef } from "react";
import CommentImg04 from "../../../../../images/all/profile-80-01.png";
import left01 from "../../../../../images/all/thumbnail-sample-10.png";

class JoinedStateCard extends Component {
  render() {
    return (
      <div className="community-open-card">
        <div className="open-card-top">
          <span className="label">커뮤니티주제</span>
        </div>
        <div className="open-card-content">
          <p>반도체 4차산업 OLED 제약의료바이오 자동화장비설계의 모든 것</p>
          <div className="thumbnail">
            <img src={left01} alt="" />
          </div>
          <div className="community-main-left-list">
            <div className="community-main-left-h3">
              인공지능과 SW를 중심으로 크게 변화하는 미래자동차 산업에서 자동차
              반도체의 중요성과 그 의미를…
            </div>
          </div>
        </div>
        <div className="open-card-bottom">
          <div className="title-area">
            <div class="text-list">
              <img src={CommentImg04} alt="" />
              <span>hyoshin</span>
            </div>
          </div>
          <div className="right-area">
            <span>멤버</span>
            <span>9</span>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinedStateCard;
