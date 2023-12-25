import React from "react";
import ReactPlayer from "react-player";
import quizWrong from "../../../../../images/all/img-quiz-wrong.png";

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
          <img src={quizWrong} alt="" />
          <span className="wro">오답 입니다.</span>
          <span className="wro2">다시 확인하고 제출하세요.</span>
        </div>
        <div className="video-quiz-footer">
          <button class="ui button fix bg">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
