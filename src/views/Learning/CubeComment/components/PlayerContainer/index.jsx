import React from "react";
// import ReactPlayer from "react-player";
// import preview from "../../../../../images/all/btn-zoom-20-px.png";
//import previewImg from "../../../../../images/all/preview-img.png";
import playerBtn from "../../../../../images/all/btn-player-next.png";
// import { Rating } from 'semantic-ui-react'
// import TimelineRateSlider from "../TimelineRateSlider";
// import VolumeRateSlider from "../VolumeRateSlider";
// import Player from "../Player";
//import ContentsCheckbox01 from "../ContentsCheckbox01";

const PlayerContainer = () => {
  return (
    <div className="video-fixed-holder">
      <div className="lms-video-sticky">
        <div className="video-container">
          <div id="video-overlay" className="video-overlay">
            <div className="video-overlay-btn">
              <button><img src={playerBtn} alt="" /></button>
            </div>
            <div className="video-overlay-text">
              <p>다음 학습 이어하기</p>
              <h3>이천포럼 2021, 이것만은 알고 가자!</h3>
            </div>
          </div>
         {/*  <div className="video-quiz-wrap">
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
                    잘 만든 기획서는 기획서에 대한 당신의 선택은?
                  </h2>
                  <a className="quiz-preview-img" href="">
                    <img src={previewImg} alt="" />
                  </a>
                </div>
                <div className="quiz-question">
                  <ContentsCheckbox01 />
                </div>
              </div>
              <div className="video-quiz-footer">
                <button class="ui button fix bg">제출하기</button>
              </div>
            </div>
          </div> */}
          <div id="panopto-embed-player" className="video-player-embed">
            <div className="iframe">플레이어 영역</div>
          </div>
          {/* mouse hover 영역 빈 div(absolute) */}
          <div className="hover-area"></div>
          <div className="bottom-controls-wrap">
            <div className="fp-controls timeline-wrap">
              <div className="range-wrap">
                <div className="rangeslide">
                  <div className="range-btn"></div>
                  <div className="range-timestamp"><span>03:54</span></div>
                  <div className="range-track">
                    <div className="range-slidebar"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="hoverButtonContainer" className="video-btn-wrap btn-wrap">
              <div className="playback-controls btn-inner left">
                <div className="bottom-transport-controls">
                  <div className="play overlay-button" role="button" aria-label="재생" tabIndex="2" title="재생"></div>
                  <div className="skip-back overlay-button" role="button" aria-label="뒤로 10초 건너뛰기" title="뒤로 10초 건너뛰기"></div>
                  <div className="skip-forward overlay-button" role="button" aria-label="앞으로 10초 건너뛰기" title="앞으로 10초 건너뛰기"></div>
                </div>
                {/* #volumeControls에 addClass'on' -> #volumeslider 노출, .flowplayer-time-display 감춤 */}
                <div id="volumeControls">
                  <div id="muteButton" className="overlay-button volume" role="button" aria-label="음소거" title="음소거 해제됨" tabIndex="2"></div>
                  <div id="volumeSlider" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                  <div className="range-wrap">
                    <div className="rangeslide">
                      <div className="range-btn"></div>
                      <div className="range-track">
                      <div className="range-slidebar"></div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="flowplayer-time-display">
                  <span className="fp-elapsed">03:54</span>
                  <span className="fp-duration">22:30</span>
                  <span className="fp-remaining">18:36</span>
                </div>
              </div>
              <div id="secondaryControls" className="btn-inner right">
                {/* .overlay-button.language 버튼에 addClass'on' -> 자막선택(.caption-language-selector-container) 노출,
                .overlay-button.playspeed 버튼에 addClass'on' -> 재생속도선택(.playspeed-selector-container) 노출 */}
                <div className="overlay-button language">
                  <div className="selector-container caption-language-selector-container">
                    <dl>
                      <dt className="slt-title"><span>자막</span></dt>
                      <dd className="slt-item"><span>사용안함</span></dd>
                      <dd className="slt-item on"><span>한국어</span></dd>
                      <dd className="slt-item"><span>中文(简体)</span></dd>
                      <dd className="slt-item"><span>English</span></dd>
                    </dl>
                  </div>
                </div>
                <div id="captionsButton" className="overlay-button caption off toggle" title="캡션 표시" tabIndex="2"></div>
                <div id="playbackSpeedButton" className="overlay-button playspeed" title="재생 속도" tabIndex="2">
                  <span className="selected-value">1x</span>
                  <div className="selector-container playspeed-selector-container">
                  <dl>
                      <dt className="slt-title"><span>속도</span></dt>
                      <dd className="slt-item"><span>2</span></dd>
                      <dd className="slt-item"><span>1.75</span></dd>
                      <dd className="slt-item"><span>1.5</span></dd>
                      <dd className="slt-item on"><span>1</span></dd>
                      <dd className="slt-item"><span>0.75</span></dd>
                      <dd className="slt-item"><span>0.5</span></dd>
                    </dl>
                  </div>
                </div>
                <div id="fullScreenButton" className="overlay-button fullscreen" tabIndex="2"></div>
              </div>
            </div>
          </div>
          <div id="gradientBottom"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerContainer;
