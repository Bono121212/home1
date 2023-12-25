import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
// import preview from "../../../../../images/all/btn-zoom-20-px.png";
import previewImg from "../../../../../images/all/preview-img.png";

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
      <div className="video-quiz-block-layer">
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
                  잘 만든 기획서는 기획 의도를 여러 사람에게 잘 전달할 수 있는
                  문서이다.
                </h2>
                <Link className="quiz-preview-img" to="">
                  <img src={previewImg} alt="" />
                </Link>
                <p>다른 분들의 의견을 살펴보세요.</p>
                <p className="hint">( 초성힌트  : ㅅㅌㅂ )</p>
              </div>
              <div className="quiz-question">
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
                <p>ss</p>
              </div>
            </div>
            <div className="video-quiz-footer">
              <button class="ui button free pop d">결과보기</button>
              <button class="ui button fix bg">응시하기</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Player;
