import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
// import preview from "../../../../../images/all/btn-zoom-20-px.png";
import previewImg from "../../../../../images/all/preview-img.png";
import ContentsCheckbox01 from "../ContentsCheckbox01";

const Player = () => {
  return (
    <div className="video quiz">
      <ReactPlayer
        url="https://youtu.be/VmpryMZpkJ4"
        className="react-player"
        playing
        width="100%"
        height="720px"
      />
      <div className="video-quiz-wrap">
        <div className="video-quiz-header">
          <h1>Video QUIZ</h1>
          <p>답안을 제출해야 강의 이어보기가 가능합니다.</p>
        </div>
        <div className="quiz-content-wrap">
          <div className="video-quiz-content">
            <div className="quiz-header">
              <div className="quiz-paging step01">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h2>
                초기 맥도날드는 점주로부터 브랜드 수수료만 제공받는 사업 구조로 대규모 수익 창출이 어려웠으나, 이후 직접 부동산을 매입한 후 점주에게 매장 임대를 하는 방식으로 혁신함으로써 부동산 수입 및 담보 현금 확보, 프랜차이즈 관리 개선 등의 효과를 보았다.
              </h2>
              <Link className="quiz-preview-img" to="">
                <img src={previewImg} alt="" />
              </Link>
            </div>
            <div className="quiz-question">
              <ContentsCheckbox01 />
            </div>
          </div>
          <div className="video-quiz-footer">
            <button class="ui button fix bg">제출하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
