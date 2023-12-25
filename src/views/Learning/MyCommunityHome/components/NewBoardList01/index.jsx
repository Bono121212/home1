import React, { Component } from "react";
import HomeFile from "../../../../../images/all/icon-community-file-copy-2.png";
import BadgeImportant from "../../../../../images/all/badge-important.png";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-1.png";
import CommentImg05 from "../../../../../images/all/icon-community-comment.png";


class NewBoardList01 extends Component {
  render() {
    return (
      <a href={()=>false} className="new-board-list">
        <div className="new-board-list-top">
          <img src={BadgeImportant} className="board-badge" alt="" />
          <img src={HomeFile} className="board-file" alt="" />
          <strong>애플의 앱클립과 스트리밍 서비스</strong>
          <span className="new-label">NEW</span>
        </div>
        <p>
          SK그룹이 구성원들의 딥체인지 역량을 키워나갈 교육·연구 통합 플랫폼인
          'SUNI’를 출범시킨다. 국내기업 최고 수준의 교육·연구 전문조직을
          운영해야 구성원들이 4차 산업혁명 등 급변하는 경영환경에 선제적으로
          대응할 수 있는 역량을…
        </p>
        <div className="survey-read-side mb0">
          <div className="title-area read-header-left">
            <div class="text-list">
              <img src={CommentImg04} alt="" />
              <span>nickname</span>
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
      </a>
    );
  }
}

export default NewBoardList01;
