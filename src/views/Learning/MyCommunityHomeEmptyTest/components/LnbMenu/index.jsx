import React, { Component } from "react";
import leftBoard01 from "../../../../../images/all/icon-communtiy-menu-board.png";
import leftBoard02 from "../../../../../images/all/icon-communtiy-menu-discussion.png";
import leftBoard03 from "../../../../../images/all/icon-community-menu-html.png";
import leftBoard04 from "../../../../../images/all/icon-communtiy-menu-download.png";
import leftBoard05 from "../../../../../images/all/icon-communtiy-menu-survey.png";
import leftBoard06 from "../../../../../images/all/icon-community-menu-link.png";
import reply from "../../../../../images/all/icon-reply-16-px.png";
import manager from "../../../../../images/all/icon-community-manager02.png";
import home from "../../../../../images/all/icon-communtiy-menu-home-on.png";
import arrow from "../../../../../images/all/icon-community-menu-open.png";

class LnbMenu extends Component {
  render() {
    return (
      <div className="community-left community-home-left">
        <div className="sub-info-box">
          <div className="commnuity-left-top">
            <div className="community-left-header">
              <span className="community-badge blue">커뮤니티주제</span>
              <div>
                <a href={()=>false} className="community-share right10"><span>공유하기</span></a>
                <a href={()=>false} className="community-info"><span>정보</span></a>
              </div>
            </div>

            <h3>에너지 거래의 현재와 미래</h3>
            <div className="community-home-left-span">
              <div className="community-user-info">
                <span><img src={manager} alt="" /><strong>nickname</strong></span>
                <span>멤버 <strong>260</strong></span>
              </div>
              <button class="ui button fix line">가입하기</button>
              
            </div>
          </div>
          <div className="community-home-right-contents">
            <ul>
              <li>
                <a href={()=>false} className="act-on">
                  <img src={home} alt="" />
                  HOME
                  <img src={arrow} className="right-menu-arrow" alt="" />
                </a>
              </li>
              <li>
                <a href={()=>false}>
                  <img src={leftBoard01} alt=""/>
                  전체글
                </a>
              </li>
              <li>
                <a href={()=>false}>
                  <img src={leftBoard01} alt="" />
                  공지사항
                </a>
              </li>
              <li>
                <a href={()=>false}>
                  <img src={leftBoard01} alt="" />딥 러닝의 역사
                </a>
              </li>
              <li>
                <a href={()=>false}>
                  <img src={leftBoard01} alt="" />딥 러닝의 중요성
                </a>
              </li>
              <ul>
                <li>
                  <a href={()=>false} className="act-on">
                    <img src={reply} alt="" />
                    <img src={leftBoard01} alt="" />
                    알고리즘
                  </a>
                </li>
                <li>
                  <a href={()=>false}>
                    <img src={reply} alt="" />
                    <img src={leftBoard04} alt="" />
                    심층 신경망
                  </a>
                </li>
                <li>
                  <a href={()=>false}>
                    <img src={reply} alt="" />
                    <img src={leftBoard05} alt="" />
                    선호도 조사
                  </a>
                </li>
                <li>
                  <a href={()=>false}>
                    <img src={reply} alt="" />
                    <img src={leftBoard06} alt="" />
                    강의듣기
                  </a>
                </li>
              </ul>

              <li>
                <a href={()=>false}>
                  <img src={leftBoard02} alt="" />왜 다시 딥 러닝인가?
                </a>
              </li>
              <li>
                <a href={()=>false}>
                  <img src={leftBoard03} alt="" />딥 러닝과 인간 두뇌
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LnbMenu;
