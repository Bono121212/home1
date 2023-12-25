import React, { Component } from "react";
import CommentImg05 from "../../../../../images/all/icon-community-comment.png";

class CommunityCard01 extends Component {
  render() {
    return (
      <div className="community-home-card">
        <a href={()=>false} className="ui comments base">
          <div className="home-card-top">
            <h3>데이터 혁신이 답이다 <span className="new-label">NEW</span></h3>
            <p>
              본격적인 데이터 분석 학습에 앞서 데이터의 중요성 및 데이터 기반
              비즈니스 혁신 산업으로…
            </p>
           
          </div>
          <div className="home-card-bottom">
            <span>2020.09.20</span>
            <span>
              <img src={CommentImg05} alt="" />
              3</span>
          </div>
        </a>
      </div>
    );
  }
}

export default CommunityCard01;
