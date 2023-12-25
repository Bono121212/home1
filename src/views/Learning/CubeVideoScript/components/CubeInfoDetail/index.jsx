import React from "react";
import Contentsheader from "../Contentsheader";
// import ContentsText from "../ContentsText";
import ContentsheaderSide from "../ContentsheaderSide";
import BubblePopup from "../BubblePopup";
import Player from "../Player";
import { Select, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const selectOptions02 = [
  { key: "KR", value: "KR", text: "KR" },
  { key: "ENG", value: "ENG", text: "ENG" },
  { key: "CHN", value: "CHN", text: "CHN" },
];

const CubeInfoDetail = () => {
    return (
        <div className="course-info-detail responsive-course">
            <div className="course-detail-center">
                <Link className="btn-wide">
                    <span>펼치기</span>
                </Link>
                <div className="main-wrap">
                    <div className="scrolling-area area2 ">
                        <div className="ui segment full">
                        {/* Header */}
                            <div className="course-info-header">
                                <Contentsheader />
                                <ContentsheaderSide />
                            </div>
                            <Player />
                            {/*sticky .lms-fixed*/}
                            <div className="lms-sticky-menu">
                                <div className="lms-fixed-inner">
                                    <a href="#lms-overview" className="lms-overview">강의소개</a>
                                    <a href="#lms-transcript" className="lms-act">Transcript</a>
                                    <a href="#lms-comment" className="lms-comment">
                                        <i className="lms-comment-icon"></i>Comment
                                        <span className="count">+12</span>
                                    </a>
                                </div>
                            </div>
                            <div className="transcript-box">
                                <div className="transcript-top trans-lang">
                                    <Select
                                    placeholder="분류를 선택해주세요"
                                    className="ui small-border dropdown m0"
                                    defaultValue={selectOptions02[0].value}
                                    options={selectOptions02}
                                    />
                                    <div>
                                        <button class="ui icon button left post delete-kr">
                                            <Icon className="icon-down-type5" />
                                            Download
                                        </button>
                                        <BubblePopup />
                                    </div>
                                </div>
                                <p className="transcript-active">
                                    Now one question that you might have about that, is about this
                                    notion of the right way of thinking about things.
                                </p>
                                <p>
                                    Now these are really, really important questions for
                                    philosophy, and I don't want to try and answer them now. But I
                                    do want to consider what a couple of famous, influential
                                    philosophers have said about those questions. And that's why
                                    I'm here at Old Calton Cemetery, outside the David Hume
                                    monument. David Hume was a famous Edinburgh-based philosopher.
                                </p>
                                <p>
                                    And he thought that a skeptical attitude towards philosophy's
                                    capacity to find the truth about the world was entirely
                                    appropriate.
                                    <span className="transcript-hover">
                                        Now one question that you might have about that, is about this
                                        notion of the right way of thinking about things.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CubeInfoDetail;
