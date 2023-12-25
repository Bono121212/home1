import React from "react";
import { Link } from "react-router-dom";
import CubeDetailSec from "../CubeDetailSec";

const OverviewCurriculumPreiod02 = () => {
    return (
        <CubeDetailSec className="ov-curriculum-sec" id="lms-curriculum">
            {/* 1. 신청 가능한 차수가 1개 있을 경우 안내 영역 */}
            <div className="ov-curriculum">
                <div className="title-area">
                    <h3 className="title">수강신청 과정안내</h3>
                    <div className="explain">
                        <p>해당 과정은 수강신청을 통해 학습이 가능한 과정입니다. 과정 정보와 차수 정보를 확인하고 수강 신청 후 학습하시기 바랍니다.</p>
                    </div>
                </div>
                <div className="define-area">
                    <div className="define">
                        <strong>1차수 신청기간</strong>
                        <span>2022.10.17 ~ 2022.10.21</span>
                    </div>
                </div>
            </div>

            {/* 2. 신청 가능한 차수가 여러개 있을 경우 안내 영역 */}
            <div className="ov-curriculum">
                <div className="title-area">
                    <h3 className="title">수강신청 과정안내</h3>
                    <div className="explain">
                        <p>해당 과정은 수강신청을 통해 학습이 가능한 과정입니다. 과정 정보와 차수 정보를 확인하고 수강 신청 후 학습하시기 바랍니다.</p>
                    </div>
                </div>
                <div className="define-area">
                    <div className="define">
                        <strong>1차수 신청기간</strong>
                        <span>2022.10.17 ~ 2022.10.21</span>
                    </div>
                    <div className="define">
                        <strong>2차수 신청기간</strong>
                        <span>2022.10.22  ~ 2022.10.27</span>
                    </div>
                </div>
            </div>

            {/* 3. 차수 신청 후 HR 승인 전일 경우 */}
            <div className="ov-curriculum">
                <div className="title-area">
                    <h3 className="title">수강신청<em className="state">승인대기</em></h3>
                    <div className="explain">
                        <p>'당신의 하루를 바꾸는 기적, Miracle Morning' 3차수의 수강신청이 현재 '승인대기' 상태입니다.</p>
                    </div>
                </div>
                <div className="define-area">
                    <div className="define">
                        <strong>승인자</strong><span>김써니 <a href="./" rel="noopener noreferrer" className="link">문의하기</a></span>
                    </div>
                </div>
            </div>

            {/* 4. 신청한 차수가 반려되었을 경우 (반려사유 없을 경우 영역 미노출) */}
            <div className="ov-curriculum">
                <div className="title-area">
                    <h3 className="title">수강신청<em className="state">신청반려</em></h3>
                    <div className="explain">
                        <p>'당신의 하루를 바꾸는 기적, Miracle Morning' 3차수의 수강신청이 현재 '신청반려' 상태입니다.</p>
                    </div>
                </div>
                <div className="define-area">
                    <div className="define">
                        <strong>반려사유</strong><span>수강 안내 메일을 발송드렸으나, 참석 여부 회신이 없어 반려 처리합니다. <br />차수 변경은 담당자를 통해 문의 바랍니다.</span>
                    </div>
                    <div className="define">
                        <strong>승인자</strong><span>김써니 <a href="./" rel="noopener noreferrer" className="link">문의하기</a></span>
                    </div>
                </div>
            </div>

            {/* 5. 신청한 차수가 승인되고, 학습기간 전일 경우 */}
            <div className="ov-curriculum">
                <div className="title-area">
                    <h3 className="title">수강신청<em className="state">학습예정</em></h3>
                    <div className="explain">
                        <p>수강 신청 승인이 완료되어 학습이 가능합니다.</p>
                    </div>
                </div>
                <div className="define-area">
                    <div className="define">
                        <strong>3차수 교육기간</strong><span>2022.10.28  ~ 2022.11.06</span>
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
export default OverviewCurriculumPreiod02;
