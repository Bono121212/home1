import React from "react";
import { Link } from "react-router-dom";
import CubeDetailSec from "../CubeDetailSec";

const OverviewCurriculumLive = () => {
    return (
        <CubeDetailSec className="ov-curriculum-sec" id="lms-curriculum">
            {/* LIVE 과정 안내 */}
            <div className="ov-curriculum">
                <div className="title-area">
                    <h3 className="title">LIVE 과정 안내</h3>
                    <div className="explain">
                        <p>본 과정에는 Live 강의가 포함되어 있습니다.</p>
                        <p><strong>B2B 마케팅 기획(3) : B2B 시장의 디지털 마케팅 커뮤니케이션</strong></p>
                    </div>
                </div>
                <div className="define-area">
                    <div className="define">
                        <strong>Live 일정</strong>
                        <span>2022.11.06 오후 1:40</span>
                    </div>
                </div>
            </div>

            {/* 선수 과정 안내 */}
            <div className="ov-curriculum">
                <div className="title-area">
                    <h3 className="title">선수 과정 안내</h3>
                    <div className="explain">
                        <p>본 과정을 학습하기 위해서는 아래의 과정을 먼저 이수해야 합니다.</p>
                    </div>
                </div>
                <div className="cont-area">
                    <p className="item-course">
                        <Link className="link">
                            <span class="label-state-cube complete"><span className="blind">학습완료</span></span>
                            <em className="label">선택</em>
                            <span className="text">모빌리티 패권 전쟁 - 선수 과정</span>
                        </Link>
                    </p>
                    <p className="item-course">
                        <Link className="link">
                            <span class="label-state-cube l-step0"><span className="blind">학습전</span></span>
                            <em className="label primary">필수</em>
                            <span className="text">가속화되는 전기차 시장 전망 및 협력 방안</span>
                        </Link>
                    </p>
                    <p className="item-course">
                        <Link className="link">
                            <span class="label-state-cube l-step2"><span className="blind">학습중</span></span>
                            <em className="label primary">필수</em>
                            <span className="text">가속화되는 전기차 시장 전망 및 협력 방안인데 글이 길어지는 경우는 말줄임 처리 글이 길어지는 경우는 말줄임 처리 글이 길어지는 경우는 말줄임 처리</span>
                        </Link>
                    </p>
                </div>
            </div>

        </CubeDetailSec>
    );
}
export default OverviewCurriculumLive;
