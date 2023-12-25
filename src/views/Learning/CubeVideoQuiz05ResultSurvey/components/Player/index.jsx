import React from "react";
import ReactPlayer from "react-player";
// import preview from "../../../../../images/all/btn-zoom-20-px.png";
import previewImg from "../../../../../images/all/preview-img.png";
// import SelectRadio01 from "../SelectRadio01";
import EmptyBtn from '../../../../../images/all/survey-empty-btn.png';
import RadioBtn from '../../../../../images/all/survay-radio-btn.png';
import { Link } from "react-router-dom";


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
            </div>
            <div className="quiz-content-wrap">
                <div className="video-quiz-content result-survey">
                    <div className="quiz-header">
                        <h2>잘 만든 기획서에 대한 당신의 선택은?</h2>
                        <Link className="quiz-preview-img" to="">
                            <img src={previewImg} alt="" />
                        </Link>
                        <p className="hint">다른 분들의 의견을 살펴보세요.</p>
                    </div>
                    <div className="quiz-question">
                        {/* 타인이 선택한 항목 : color-others*/}
                        {/* 내가 선택한 항목 : color-mine */}
                        <ul className="result-list">
                            <li>
                                <span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
                                <p>스티브 잡스의 PT와 같은 핵심만 간결한 기획서 긴문장 말줄임 예시입니다.예시구요.예시랍니다</p>
                                <div className="card-gauge-bar sty2 color-others">
                                    <div className="rangeBox">
                                        <div class="range">
                                            <div
                                                style={{
                                                width: "22%",
                                                }}
                                                className="percent"
                                            ></div>
                                        </div>
                                        <span>22<em>%</em></span>
                                    </div>
                                </div>
                                <button className="quiz-preview-img">
                                    <img src={previewImg} alt="" />
                                </button>
                            </li>
                            <li className="mine">
                                <span className="course-survey-list-btnImg"><img src={RadioBtn} alt="" /></span>
                                <p>발표 내용을 친절한 디자인으로 멋지게 정리한 기획서</p>
                                <div className="card-gauge-bar sty2 color-mine">
                                    <div className="rangeBox">
                                        <div class="range">
                                            <div
                                                style={{
                                                width: "46%",
                                                }}
                                                className="percent"
                                            ></div>
                                        </div>
                                        <span>46<em>%</em></span>
                                    </div>
                                </div>
                                <button className="quiz-preview-img">
                                    <img src={previewImg} alt="" />
                                </button>
                            </li>
                            <li>
                                <span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
                                <p>정리가 잘 된 기획서를 벤치마크 적용한 기획서</p>
                                <div className="card-gauge-bar sty2 color-others">
                                    <div className="rangeBox">
                                        <div class="range">
                                            <div
                                                style={{
                                                width: "23%",
                                                }}
                                                className="percent"
                                            ></div>
                                        </div>
                                        <span>23<em>%</em></span>
                                    </div>
                                </div>
                                <button className="quiz-preview-img">
                                    <img src={previewImg} alt="" />
                                </button>
                            </li>
                            <li>
                                <span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
                                <p>문서의 의도를 논리적으로 정리한 기획서</p>
                                <div className="card-gauge-bar sty2 color-others">
                                    <div className="rangeBox">
                                        <div class="range">
                                            <div
                                                style={{
                                                width: "9%",
                                                }}
                                                className="percent"
                                            ></div>
                                        </div>
                                        <span>9<em>%</em></span>
                                    </div>
                                </div>
                                <button className="quiz-preview-img">
                                    <img src={previewImg} alt="" />
                                </button>
                            </li>

                        </ul>
                    </div>
                    </div>
                    <div className="video-quiz-footer">
                        <button class="ui button fix bg">확인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
