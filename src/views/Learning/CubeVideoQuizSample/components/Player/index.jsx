import React from "react";
import ReactPlayer from "react-player";
import quizSample from "../../../../../images/all/img-quiz-sample.png";

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
          <div className="imgbox"><img src={quizSample} alt="" /></div>
          <span className="wro">영상 보느라, 퀴즈 푸느라 고생이 많아요~</span>
          <span className="wro2">다음 영상도 집중해서 보면 도움이 될 꺼에요!</span>
        </div>
        <div className="video-quiz-footer">
          <button class="ui button fix bg">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
