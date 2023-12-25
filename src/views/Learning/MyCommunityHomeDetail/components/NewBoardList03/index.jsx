import React, { Component } from "react";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-3.png";
import CommentImg05 from "../../../../../images/all/icon-community-comment.png";
import { Link } from "react-router-dom";

class NewBoardList03 extends Component {
  render() {
    return (
      <Link className="new-board-list">
        <div className="new-board-list-top">
          <strong>숏폼 플랫폼인 Quibi 서비스가 론칭되었다</strong>
          <span className="new-label">NEW</span>
        </div>
        <p>
          카이스트 산업 공학과 장영재 교수와 함께 스마트팩토리가 추구하는
          기본적인 철학을 배우고, Smart Factory를 구현하기 위한 제조 시스템의
          이해와 의사결정에 대해 학습해 보세요.
        </p>
        <div className="survey-read-side mb0">
          <div className="title-area read-header-left">
            <div class="text-list">
              <img src={CommentImg04} alt="" />
              <span>EBBLE</span>
            </div>
            <div class="text-list">
              <span>2020.09.09</span>
            </div>
          </div>
          <div className="right-area">
            <button>
              <img src={CommentImg05} alt="" />
              99
            </button>
          </div>
        </div>
      </Link>
    );
  }
}

export default NewBoardList03;
