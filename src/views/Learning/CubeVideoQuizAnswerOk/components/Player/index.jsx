import React from "react";
import ReactPlayer from "react-player";
import answerOk from "../../../../../images/all/img-quiz-complete.png";

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
      <div className="video-quiz-wrap sty2">
        <div className="video-quiz-header">
          <h1>Video QUIZ</h1>
        </div>
        <div className="quiz-content-wrap quiz-center-box">
          <div className="imgbox">
            <img src={answerOk} alt="" />
          </div>
          <span className="wro">답안 제출이 완료됐습니다.</span>
          <span className="wro2">다른 참여자의 의견을 확인할 수 있습니다.</span>
        </div>
        <div className="video-quiz-footer">
            <button class="ui button fix bg grey">결과보기</button>
            <button class="ui button fix bg">확인</button>
          </div>
      </div>
    </div>
  );
};

export default Player;
