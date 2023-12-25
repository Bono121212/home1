import React from "react";
// import Contentsheader from "../Contentsheader";
import ContentsText from "../ContentsText";
// import ContentsheaderSide from "../ContentsheaderSide";
import Player from "../Player";
// import Video from "../../../../../images/all/player.png";
import playerBtn from "../../../../../images/all/btn-player-next.png";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CubeInfoDetail = () => {
  return (
    <div className="course-info-detail responsive-course">
      <div className="course-detail-center">
        <Link className="btn-wide">
          <span>펼치기</span>n
        </Link>
        <div className="main-wrap">
          <div className="scrolling-area area2 ">
            <div className="ui segment full">
              {/* Header */}
              {/* <div className="course-info-header">
                <Contentsheader />
                <ContentsheaderSide />
              </div> */}
              {/* 비디오 영역 */}
              <div className="video-fixed-holder lms-video-fixed sty2">
                <div className="lms-video-sticky">
                  <div className="video-container">
                    <Player />
                    {/* video-overlay 에 "none"클래스 추가 시 영역 안보이기 */}
                    <div className="video-overlay">
                      <div className="video-overlay-btn">
                        <button>
                          <img src={playerBtn} alt="" />
                        </button>
                      </div>
                      <div className="video-overlay-text">
                        <p>다음 학습 이어하기</p>
                        <h3>[반도체 클라쓰] Keyword로 알아보는 반도체의 품격</h3>
                      </div>
                    </div>
                    <div className="video-overlay-small art">
                      <button type="button">
                        <span className="copy">퀴즈풀고 이어보기</span>
                      </button>
                    </div>
                  </div>
                  <div className="sticky-video-content">
                    <div className="header">
                      [반도체 클라쓰] Keyword로 알아보는 반도체의 품격
                    </div>
                    <div className="time-check">
                      <strong>00:02</strong> / 27:21
                    </div>
                    <div className="contents-header-side">
                      <div className="header-right-link">
                        <Link to="">
                          <span>
                            <Icon className="listAdd" />
                          관심목록 추가
                        </span>
                        </Link>
                        <Link to="">
                          <span>
                            <Icon className="linkCopy" />
                          링크 복사
                        </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/*<div className="course-video lms-intro">
                <button class="ui icon button right btn-blue">
                  View Transcript
                  <i aria-hidden="true" class="icon icon morelink"></i>
                </button>
              </div>*/}
              {/*sticky .lms-fixed*/}
              {/*sticky .lms-fixed*/}

              <div class="class-guide-txt fn-parents ql-snow sty2">
                <div className="lms-sticky-menu art">
                  <div className="lms-fixed-inner">
                    <a href="#lms-overview" className="lms-act">강의소개</a>
                    <a href="#lms-comment" className="lms-comment">스크립트</a>
                    <a href="#lms-comment" className="lms-comment">코멘트</a>
                  </div>
                </div>
                <div class="text ql-editor">
                  <p>
                  「한방에 이해하는 꿀잼 반도체」 는 반도체 Tech 이해에 필요한
                    기반지식과 핵심이론을 총 3편에 걸쳐 쉽고 재밌고 빠르게
                    정리해 드립니다.
                  </p>
                  <p className="margin30">
                    1. 인류 최고의 발명품 트랜지스터
                    <br />
                    2. 반도체는 어떻게 만들어 지는가
                    <br />
                    3. 반도체 제품의 종류와 동작원리
                  </p>
                  <p>
                    - 원고 : mySUNI 반도체 College
                    <br />- 내래이터 : 과학 유튜버 공진(정현승)
                  </p>
                </div>
              </div>

              <div className="badge-detail border-none art">
                {/* 관련카테고리 , 태그 */}
                <ContentsText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeInfoDetail;
