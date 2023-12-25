import React from "react";
import ReactPlayer from "react-player";
// import preview from "../../../../../images/all/btn-zoom-20-px.png";
// import previewImg from "../../../../../images/all/preview-img.png";
import SelectRadio01 from "../SelectRadio01";

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
              다음 중 잘 된 기획서에 대한 당신의 선택은?
              </h2>
            </div>
            <div className="quiz-question">
              <SelectRadio01 />
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
