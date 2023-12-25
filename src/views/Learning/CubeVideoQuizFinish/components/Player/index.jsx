import React from "react";
import ReactPlayer from "react-player";
import quizFinish from "../../../../../images/all/img-quiz-finish.png";

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
          <div className="imgbox"><img src={quizFinish} alt="" /></div>
          <span className="wro">퀴즈 참여가 완료됐습니다.</span>
          <span className="wro2">계속해서 영상을 이어보세요.</span>
        </div>
        <div className="video-quiz-footer">
          <button class="ui button fix bg">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
