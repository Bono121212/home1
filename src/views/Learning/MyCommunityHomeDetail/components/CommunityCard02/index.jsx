import React, { Component, createRef } from "react";
import CommentImg05 from "../../../../../images/all/icon-community-comment.png";

class CommunityCard02 extends Component {
  render() {
    return (
      <div className="community-home-card">
        <a className="ui comments base">
          <div className="home-card-top">
            <h3>애플의 앱클립과 스트리밍 서비스 안내</h3>
            <p>
            카이스트 산업 공학과 장영재 교수와 함께 스마트팩토리가 추구하는 기본적인 철학을 유지…
            </p>
          </div>
          <div className="home-card-bottom">
            <span>2020.09.18</span>
            <span>
              <img src={CommentImg05} />
              99</span>
          </div>
        </a>
      </div>
    );
  }
}

export default CommunityCard02;
