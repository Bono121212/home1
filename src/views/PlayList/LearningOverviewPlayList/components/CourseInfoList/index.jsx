import React from 'react';
import { Link } from "react-router-dom";
import {Button, Icon, Image} from "semantic-ui-react";
import foldIcon from "../../../../../images/all/icon-fold.svg";

const CourseInfoList = () => {
    return (
        <div className="course-info-list">
            <div className="course-header-list">
                <Link className="btn-view-change"><Icon className="list24 icon"/><span>List</span></Link>
                <Button className="btn_note_new"><Icon /><span>Note</span><div className="bubble"><p>Note는 각 콘텐츠별로 작성하실 수 있습니다.</p></div> </Button>
                <Link className="btn-fold"><Image src={foldIcon} /></Link>
            </div>
            <div className="course-info-wrapper">
                <div className="accordion-state-holder act-on">
                    <a href="#none" className="btn-over-view enable">AI와 사회문제 </a>
                    <button className="btn-accordion open">총<strong>6개</strong> 강의 구성</button>
                    <span className="label-state-learning"><span>진행상태</span></span>
                </div>
                <div className="state-course-holder">
                    <Link className="btn-state-course">
                        <span className="label-state-cube"><span>cube 완료상태</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">AI와 SV</span>
                            <ul className="type-info">
                                <li>Video</li>
                                <li>17m</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className="btn-state-course">
                        <span className="label-state-cube n-discuss"><span>토론하기</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">AI가 인간처럼 지성과 직관을 구현한다면, AI를 인간과 같은 '주체'로 대하게 될까요?</span>
                            <ul className="type-info">
                                <li>Talk</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className="btn-state-course">
                        <span className="label-state-cube complete"><span>cube 완료상태</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">AI 윤리의 등장 배경과 현황 </span>
                            <ul className="type-info">
                                <li>Video</li>
                                <li>1h</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className="btn-state-course">
                        <span className="label-state-cube n-discuss"><span>토론하기</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">AI 윤리는 전통적인 윤리와 어떤 점에서 다르다고 생각하세요?</span>
                            <ul className="type-info">
                                <li>Talk</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className="btn-state-course">
                        <span className="label-state-cube "><span>cube 완료상태</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">AI 윤리가 우리에게 중요한 이유 </span>
                            <ul className="type-info">
                                <li>Video</li>
                                <li>17m</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className="btn-state-course">
                        <span className="label-state-cube n-discuss"><span>토론하기</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">'AI 기술을 통한 사회문제 해결 vs. AI 윤리 준수' 중 하나만 가능하다면, 어떤 선택을 하시겠어요?</span>
                            <ul className="type-info">
                                <li>Talk</li>
                            </ul>
                        </span>
                    </Link>
                    <Link className="btn-state-course">
                        <span className="label-state-cube"><span>cube 완료상태</span></span>
                        <span className="copy-holder">
                            <span className="copy-title">Survey</span>
                        </span>
                    </Link>
                </div>
                <div className="lms-fixed-holder"></div>
            </div>
        </div>
    )
}


export default CourseInfoList

