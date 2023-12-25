import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeFile from "../../../../../images/all/icon-community-file-copy-2.png";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-5.png";
import CommentImg05 from "../../../../../images/all/icon-community-comment.png";

class NewBoardList04 extends Component {
  render() {
    return (
      <Link to="" className="new-board-list">
        <div className="new-board-list-top">
          <img src={HomeFile} className="board-file" alt="" />
          <strong>딥러닝 동향과 관련된 자료 모음입니다.</strong>
          <span className="new-label">NEW</span>
        </div>
        <p>
          모든 방면에서 최고의 강의!! 최고의 학습 중 하나였습니다. 실습을
          수행하고 개념을 이해하는데 매우 간단하고 쉽습니다. 내용은 기본
          내용이지만 용어를 기억하는 데 도움이됩니다. 유연하고 강력한 클라우드
          개발 환경에서 탁월한 경험을…
        </p>
        <div className="survey-read-side mb0">
          <div className="title-area read-header-left">
            <div class="text-list">
              <img src={CommentImg04} alt="" />
              <span>captain</span>
            </div>
            <div class="text-list">
              <span>2020.08.30</span>
            </div>
          </div>
          <div className="right-area">
            <button>
              <img src={CommentImg05} alt="" />3
            </button>
          </div>
        </div>
      </Link>
    );
  }
}

export default NewBoardList04;
