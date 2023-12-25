import React, { Component, createRef } from "react";
import CommentImg05 from "../../../../../images/all/icon-community-comment.png";
import HomeFile from "../../../../../images/all/icon-community-file-copy-2.png";

class CommunityCard03 extends Component {
  render() {
    return (
      <div className="community-home-card">
        <a className="ui comments base">
          <div className="home-card-top">
            <img src={HomeFile} />
            <h3>스트리밍 서비스 안내</h3>
            <p>
            인공지능과 SW를 중심으로 크게 변화하는 미래자동차 산업에서 자동차 반도체의 중요성을…
            </p>
          </div>
          <div className="home-card-bottom">
            <span>2020.09.09</span>
            <span>
              <img src={CommentImg05} />
              36</span>
          </div>
        </a>
      </div>
    );
  }
}

export default CommunityCard03;
