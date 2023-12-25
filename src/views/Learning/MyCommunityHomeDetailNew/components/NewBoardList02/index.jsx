import React, { Component } from "react";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-6.png";
import CommentImg05 from "../../../../../images/all/icon-community-comment.png";
import { Link } from "react-router-dom";

class NewBoardList02 extends Component {
  render() {
    return (
      <Link className="new-board-list">
        <div className="new-board-list-top">
          <strong>황이석 교수의 Financial Acumen</strong>
          <span className="new-label">NEW</span>
        </div>
        <p>
          인공지능과 SW를 중심으로 크게 변화하는 미래자동차 산업에서 자동차
          반도체의 중요성과 그 의미를 살펴보고, 우리가 자동차 반도체 산업의
          리더가 되기 위해 극복해야 할 이슈들을 분석합니다.
        </p>
        <div className="survey-read-side mb0">
          <div className="title-area read-header-left">
            <div class="text-list">
              <img src={CommentImg04} alt="" />
              <span>hyoshin</span>
            </div>
            <div class="text-list">
              <span>2020.09.09</span>
            </div>
          </div>
          <div className="right-area">
            <button>
              <img src={CommentImg05} alt="" />
              3
            </button>
          </div>
        </div>
      </Link>
    );
  }
}

export default NewBoardList02;
